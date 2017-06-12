using Ang2ToDoItems.Services.Identity;
using Microsoft.AspNet.Identity;
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
        private readonly IServiceCreator _serviceCreator = new ServiceCreator();
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext<IUserService>(() =>
            {
                return _serviceCreator.CreateUserService();
            });
            app.UseCookieAuthentication(new Microsoft.Owin.Security.Cookies.CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath=new PathString("/Account/Login")
            });
        }

    }
}