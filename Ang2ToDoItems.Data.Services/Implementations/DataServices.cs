using Ang2ToDoItems.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services.Implementations
{
    internal class ClientProfileDataService: DataService<ClientProfile, int>, IClientProfileDataService
    {
        public ClientProfileDataService(Ang2ToDoItemsDbContext context):base(context)
        {
        }
    }
}
