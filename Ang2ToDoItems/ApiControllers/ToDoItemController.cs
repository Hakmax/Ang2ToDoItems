using Ang2ToDoItems.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using Ang2ToDoItems.Helpers;
using Microsoft.AspNet.Identity;
using Ang2ToDoItems.Common;
using Autofac;
using Ang2ToDoItems.Services;
using Ang2ToDoItems.Models.ToDoItem;

namespace Ang2ToDoItems.ApiControllers
{
    public class ToDoItemController : ApiController
    {
        private readonly SiteJsonDataHelper _siteJsonDataHelper = new SiteJsonDataHelper();
        public IHttpActionResult GetAll([FromUri]PageListRequest request)
        {
            request.PageSize = 5;
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                var items = service.GetUserToDoItems(request, User.Identity.GetUserId());
                return Ok(items);
            }
        }
        
        public IHttpActionResult Get(int id)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                return Ok(service.GetUserToDoItem(id, User.Identity.GetUserId()));
            }
        }

        public IHttpActionResult GetErr()
        {
            return Content(HttpStatusCode.BadRequest, new { Error = "error happened" });
        }

        public IHttpActionResult Post(ToDoItemModel model)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                service.CreateUserToDoItem(model, User.Identity.GetUserId());
            }
            return Ok();
        }

        public IHttpActionResult Put(ToDoItemModel model)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                service.UpdateUserToDoItem(model, User.Identity.GetUserId());
            }
            return Ok();
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            using (var scope = DependencyConfig.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<IToDoItemService>();
                service.DeleteUserToItem(id, User.Identity.GetUserId());
            }
            return Ok();
        }
    }
}
