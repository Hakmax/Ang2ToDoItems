using Ang2ToDoItems.Data.Services.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services
{
    public interface IUnitOfWork
    {
        /*ApplicationUserManager ApplicationUserManager { get; }
        IClientManager ClientManager { get; }
        ApplicationRoleManager ApplicationRoleManager { get; }*/
        int Save();
        Task<int> SaveAsync();
        Task<int> SaveAsync(CancellationToken cancellationToken);
    }
    
    public interface IExtendedUnitOfWork:IUnitOfWork
    {
        void ExecuteSqlCommand(string sql);
    }
}
