using Ang2ToDoItems.Models.Identity.Management;
using Ang2ToDoItems.Services;
using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Ang2ToDoItems.ApiControllers
{
    [Authorize]
    public class RoleController:ApiController
    {
        public IHttpActionResult GetAll()
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IRoleService>();
                var roles = service.GetRoles();
                return Ok(roles);
            }
        }

        public IHttpActionResult Post(Role role)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IRoleService>();
                service.CreateRole(role);
                return Ok();
            }
        }

        public IHttpActionResult Put(Role role)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IRoleService>();
                service.UpdateRole(role);
                return Ok();
            }
        }
    }
}