using Ang2ToDoItems.Data.Services;
using Ang2ToDoItems.Data.Services.Identity;
using Ang2ToDoItems.Services;
using Ang2ToDoItems.Services.Identity;
using Autofac;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems
{
    public static class DependencyConfig
    {
        public static IContainer Container { get; private set; }
        public static void Configure()
        {
            var builder = new ContainerBuilder();
            /*builder.Register<IdentityFactoryOptions<ApplicationUserManager>>(c => new IdentityFactoryOptions<ApplicationUserManager>
            { DataProtectionProvider = new Microsoft.Owin.Security.DataProtection.DpapiDataProtectionPr‌​ovider("Ang2ToDoItems") });*/
            builder.RegisterModule<DataServicesModule>();
            builder.RegisterModule<ServicesModule>();

            Container = builder.Build();
        }
    }
}