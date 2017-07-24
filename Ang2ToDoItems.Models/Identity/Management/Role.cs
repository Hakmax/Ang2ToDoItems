using AutoMapper;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.Identity.Management
{
    public class Role:ModelWithName<string>
    {
    }

    internal class RoleMappingProfile:Profile
    {
        public RoleMappingProfile()
        {
            CreateMap<IdentityRole, Role>();
            CreateMap<Role, IdentityRole>();
        }
    }
}
