using Ang2ToDoItems.Data.Services.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services
{
    public interface IUnitOfWork:IDisposable
    {
        ApplicationUserManager ApplicationUserManager { get; }
        IClientManager ClientManager { get; }
        ApplicationRoleManager ApplicationRoleManager { get; }
        Task SaveAsync();
    }
}
