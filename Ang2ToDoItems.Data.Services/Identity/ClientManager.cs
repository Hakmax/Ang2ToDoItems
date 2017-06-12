using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ang2ToDoItems.Data.Entities.Identity;

namespace Ang2ToDoItems.Data.Services.Identity
{
    public class ClientManager : IClientManager
    {
        public Ang2ToDoItemsDbContext Database { get; set; }

        public ClientManager(Ang2ToDoItemsDbContext database)
        {
            Database = database;
        }

        public void Create(ClientProfile profile)
        {
            Database.ClientProfiles.Add(profile);
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
