using Ang2ToDoItems.Models;
using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Services;
using Autofac;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;

namespace Ang2ToDoItems.ApiControllers
{
    public class AuthModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }


    public class UserController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Load()
        {
            UserResponse res = null;
            if (User?.Identity?.IsAuthenticated == true)
            {
                res = new UserResponse { Name = User.Identity.Name };
            }
            return Ok(res);
        }

        [HttpPost]
        public async Task<IHttpActionResult> Auth(AuthModel model)
        {

            //return Ok();
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IUserService>();
                var claims = await service.Auth(model.UserName, model.Password);
                if (claims != null)
                {
                    HttpContext.Current.GetOwinContext().Authentication.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = true
                    }, claims);
                    return Ok();
                }
            }
            return Content(HttpStatusCode.BadGateway, new { ErrorMessage = "Неверное имя пользователя/пароль" });
        }

        [HttpPost]
        public IHttpActionResult LogOut()
        {
            HttpContext.Current.GetOwinContext().Authentication.SignOut();
            return Ok();
        }

        [HttpPost]
        public async Task<IHttpActionResult> Register(RegisterUserModel model)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IUserService>();
                var result =await service.CreateUser(model);
                if(result.Status==Models.Result.RegisterUserResultStatus.Success)
                {
                    return Ok();
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest, new
                    {
                        ErrorMessage = string.Join(", ", result.Errors)
                    });
                }
            }
        }

        [HttpPost]
        public IHttpActionResult LoadProfile()
        {
            if(User?.Identity.IsAuthenticated==true)
            {
                var userId= User.Identity.GetUserId();
                using (var scope = DependencyConfig.Container.BeginLifetimeScope())
                {
                    var service = scope.Resolve<IUserService>();
                    var profile = service.GetCientProfile(userId);
                    return Ok(profile);
                }
            }
            else
            {
                return BadRequest();
            }
        }

        public IHttpActionResult SaveProfile(ClientProfile profile)
        {
            if (User?.Identity.IsAuthenticated == true)
            {
                var userId = User.Identity.GetUserId();
                using (var scope = DependencyConfig.Container.BeginLifetimeScope())
                {
                    var service = scope.Resolve<IUserService>();
                    service.SaveProfile(profile, userId);
                    return Ok(profile);
                }
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
