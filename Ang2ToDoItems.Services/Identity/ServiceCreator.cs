using Ang2ToDoItems.Data.Services.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Services.Identity
{
    public class ServiceCreator : IServiceCreator
    {
        public IUserService CreateUserService()
        {
            return new UserService(new IdentityUnitOfWork());
        }
    }
}
