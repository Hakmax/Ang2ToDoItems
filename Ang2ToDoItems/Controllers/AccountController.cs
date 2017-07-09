using Ang2ToDoItems.Data.Services.Identity;
using Ang2ToDoItems.Models;
using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Services;
using Ang2ToDoItems.Services.Identity;
using Autofac;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Ang2ToDoItems.Controllers
{
    public class AccountController : Controller
    {
        /*public AccountController(ApplicationUserManager manager)
        {
            var i = 0;
        }*/

        private ApplicationUserManager UserService
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }


        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        // GET: Register
        public ActionResult Register()
        {
            return View();
        }

        public async Task<ActionResult> LogIn(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                using (var scope = DependencyConfig.Container.BeginLifetimeScope())
                {
                    var service = DependencyConfig.Container.Resolve<IUserService>();
                    var authResult = await service.Auth(model.Email, model.Password);
                    if (authResult != null)
                    {
                        AuthenticationManager.SignOut();
                        AuthenticationManager.SignIn(new AuthenticationProperties
                        {
                            IsPersistent = true
                        }, authResult);
                        return RedirectToAction("Index", "Home");
                    }
                    else
                        ModelState.AddModelError("", "Неверный логин/пароль.");
                }
            }
            return View("Index", model);
        }

        [HttpPost]
        public ActionResult LogOut()
        {
            AuthenticationManager.SignOut();
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Register(RegisterUserModel model)
        {
            if (ModelState.IsValid)
            {
                /*var result=UserService.Create(new UserModel
                {
                    Email=model.Email,
                    Name=model.Name,
                    Password=model.Password,
                    Role="Administrator"
                });*/
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Register", "Account");
            }
        }

        public ActionResult UserProfile()
        {
            return View();
        }
    }
}