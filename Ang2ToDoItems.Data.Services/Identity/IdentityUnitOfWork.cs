using Ang2ToDoItems.Data.Entities.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services.Identity
{
    public class IdentityUnitOfWork : IUnitOfWork
    {
        private Ang2ToDoItemsDbContext _dataBase;
        private ApplicationUserManager _userManager;
        private ApplicationRoleManager _roleManager;
        private IClientManager _clientManager;

        public IdentityUnitOfWork()
        {
            _dataBase = new Ang2ToDoItemsDbContext();
            _userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(_dataBase));
            _roleManager = new ApplicationRoleManager(new RoleStore<ApplicationRole>(_dataBase));
            _clientManager = new ClientManager(_dataBase);
        }

        public ApplicationRoleManager ApplicationRoleManager
        {
            get
            {
                return _roleManager;
            }
        }

        public ApplicationUserManager ApplicationUserManager
        {
            get
            {
                return _userManager;
            }
        }

        public IClientManager ClientManager
        {
            get
            {
                return _clientManager;
            }
        }


        public async Task SaveAsync()
        {
            await _dataBase.SaveChangesAsync();
        }

        private bool disposed = false;
        public void Dispose()
        {
            //Dispose();
            GC.SuppressFinalize(this);
        }

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _userManager.Dispose();
                    _roleManager.Dispose();
                    _clientManager.Dispose();
                }
                this.disposed = true;
            }
        }
    }
}
