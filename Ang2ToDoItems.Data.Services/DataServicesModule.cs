using Ang2ToDoItems.Data.Entities.Identity;
using Ang2ToDoItems.Data.Services.Identity;
using Autofac;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Ang2ToDoItems.Data.Services
{
    public class DataServicesModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            Database.SetInitializer(new System.Data.Entity.MigrateDatabaseToLatestVersion<Ang2ToDoItemsDbContext,
                Migrations.Configuration>(Ang2ToDoItemsDbContext.ConnectionStringName));
            builder.RegisterType<Ang2ToDoItemsDbContext>().AsSelf()/*.As<IdentityDbContext<ApplicationUser>>()*/.InstancePerLifetimeScope().PropertiesAutowired();
            builder.Register(x=>new UserStore<ApplicationUser>(x.Resolve<Ang2ToDoItemsDbContext>())).AsImplementedInterfaces().PropertiesAutowired().InstancePerLifetimeScope();
            builder.Register(x=>new RoleStore<ApplicationRole>(x.Resolve<Ang2ToDoItemsDbContext>())).AsImplementedInterfaces().PropertiesAutowired().InstancePerLifetimeScope();

            builder.Register<IdentityFactoryOptions<ApplicationUserManager>>(c => new IdentityFactoryOptions<ApplicationUserManager>
            { DataProtectionProvider = new Microsoft.Owin.Security.DataProtection.DpapiDataProtectionPr‌​ovider("Ang2ToDoItems") });
            //builder.Register(c => HttpContext.Current.GetOwinContext().Authentication).As<IAuthenticationManager>();

            builder.RegisterType<ApplicationUserManager>().AsSelf().InstancePerLifetimeScope().PropertiesAutowired();
            builder.RegisterType<ApplicationRoleManager>().AsSelf().InstancePerLifetimeScope().PropertiesAutowired();

            builder.RegisterAssemblyTypes(ThisAssembly).AsImplementedInterfaces().PropertiesAutowired().InstancePerLifetimeScope();
            base.Load(builder);
        }
    }
}
