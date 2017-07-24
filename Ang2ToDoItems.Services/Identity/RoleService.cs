using Ang2ToDoItems.Data.Services;
using Ang2ToDoItems.Models.Identity.Management;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Services.Identity
{
    internal class RoleService:IRoleService
    {
        private readonly Lazy<IIdentityDbContext> _identityContext;
        private readonly Lazy<IUnitOfWork> _unitOfWork;
        private readonly Lazy<Ang2ToDoItemsDbContext> _context;
        public RoleService(Lazy<IIdentityDbContext> identityContext, Lazy<IUnitOfWork> unitOfWork, Lazy<Ang2ToDoItemsDbContext> context)
        {
            _identityContext = identityContext;
            _unitOfWork = unitOfWork;
            _context= context;
        }

        public void CreateRole(Role role)
        {
            var newDbRole = Mapper.Map<IdentityRole>(role);
            newDbRole.Id = Guid.NewGuid().ToString("d");
            _identityContext.Value.Roles.Add(newDbRole);
            _unitOfWork.Value.Save();
        }

        public void UpdateRole(Role role)
        {
            var dbRole = _context.Value.Roles.FirstOrDefault(x => x.Id == role.Id);
            if(dbRole!=null)
            {
                Mapper.Map(role, dbRole);
                _unitOfWork.Value.Save();
            }
        }

        public IList<Role> GetRoles()
        {
            var res = _identityContext.Value.Roles.ProjectTo<Role>().ToList();
            return res;
        }
    }
}
