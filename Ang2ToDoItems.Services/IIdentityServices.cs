using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Models.Result;
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
        Task<RegisterUserResult> CreateUser(RegisterUserModel user);
        Task<ClaimsIdentity> Auth(string userName, string password);
        ClientProfile GetCientProfile(string userId);
        void SaveProfile(ClientProfile profile, string userId);
    }

    public interface IRoleService
    {
        void CreateRole(string roleName);
    }
    
}
