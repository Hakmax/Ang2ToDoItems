using Ang2ToDoItems.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Services.Identity
{
    public interface IUserService:IDisposable
    {
        Task<OperationResult> Create(UserModel user);
        Task<ClaimsIdentity> Auth(UserModel user);
        Task SetInitialData(UserModel user, List<string> roles);
    }

    public interface IServiceCreator
    {
        IUserService CreateUserService();
    }
}
