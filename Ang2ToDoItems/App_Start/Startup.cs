using Ang2ToDoItems.Services.Identity;
using Autofac;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[assembly: OwinStartup(typeof(Ang2ToDoItems.App_Start.Startup))]
namespace Ang2ToDoItems.App_Start
{

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            DependencyConfig.Configure();

            /*app.CreatePerOwinContext<IUserService>(() =>
            {
                using (var scope = DependencyConfig.Container.BeginLifetimeScope())
                {
                    var userService = scope.Resolve<IUserService>();
                    return userService;
                }
            });*/
            
            app.UseCookieAuthentication(new Microsoft.Owin.Security.Cookies.CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login")
            });
        }

    }
}