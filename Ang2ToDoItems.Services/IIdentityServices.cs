using Ang2ToDoItems.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Services
{
    public interface IUserService:IDisposable
    {
        Task<OperationResult> CreateUser(UserModel user);
        Task<ClaimsIdentity> Auth(UserModel user);
    }

    public interface IRoleService
    {
        void CreateRole(string roleName);
    }
    
}
