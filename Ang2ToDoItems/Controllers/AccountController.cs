using Ang2ToDoItems.Models;
using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Services.Identity;
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
        private IUserService UserService
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<IUserService>();
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
            if(ModelState.IsValid)
            {
                var user = new UserModel { Email = model.Email, Password = model.Password };
                var claims =await UserService.Auth(user);
                if (claims == null)
                    ModelState.AddModelError("", "Неверный логин/пароль.");
                else
                {
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                         IsPersistent=true
                    }, claims);
                    return RedirectToAction("Index", "Home");
                }
            }
            return View("Index",model);
        }

        [HttpPost]
        public ActionResult LogOut()
        {
            AuthenticationManager.SignOut();
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            if(ModelState.IsValid)
            {
                var result=UserService.Create(new UserModel
                {
                    Email=model.Email,
                    Name=model.Name,
                    Password=model.Password,
                    Role="Administrator"
                });
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Register", "Account");
            }
        }
    }
}