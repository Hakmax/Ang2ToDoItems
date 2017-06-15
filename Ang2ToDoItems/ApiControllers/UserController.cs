using Ang2ToDoItems.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ang2ToDoItems.ApiControllers
{
    public class UserController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Load()
        {
            UserResponse res = null;
            if(User?.Identity?.IsAuthenticated==true)
            {
                res = new UserResponse { Name = User.Identity.Name };
            }
            return Ok(res);
        }
    }
}
