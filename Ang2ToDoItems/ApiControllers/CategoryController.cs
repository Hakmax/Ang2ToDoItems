using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Ang2ToDoItems.Helpers;
using Ang2ToDoItems.Models;
using System.IO;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Autofac;
using Ang2ToDoItems.Services;

namespace Ang2ToDoItems.ApiControllers
{
    [Authorize()]
    public class CategoryController : ApiController
    {
        private readonly SiteJsonDataHelper _siteJsonDataHelper = new SiteJsonDataHelper();
        public IHttpActionResult GetAll()
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                return Ok(service.GetUserToDoItemCategories(User.Identity.GetUserId()));
            }
        }

        [HttpPost]
        public IHttpActionResult Post(ModelWithName<int> category)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                service.CreateToDoItemCategory(category, User.Identity.GetUserId());
                return Ok();
            }
        }

        [HttpPut]
        public IHttpActionResult Put([FromBody] ModelWithName<int> category)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                service.UpdateToDoItemCategory(category, User.Identity.GetUserId());
                return Ok();
            }
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                if (service.DeleteUserToDoItemCategory(id, User.Identity.GetUserId()))
                    return Ok();
                else
                    return BadRequest();
            }

        }
    }
}