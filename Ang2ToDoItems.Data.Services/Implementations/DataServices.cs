using Ang2ToDoItems.Data.Entities;
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

    internal class ToDoItemDataService : DataService<ToDoItem, int>, IToDoItemDataService
    {
        public ToDoItemDataService(Ang2ToDoItemsDbContext context) : base(context)
        {
        }

        public override void Create(ToDoItem entity)
        {
            if (entity.CreatedOn == DateTime.MinValue)
                entity.CreatedOn = DateTime.Now;
            base.Create(entity);
        }
    }

    internal class ToDoItemCategoryDataService : DataService<ToDoItemCategory, int>, IToDoItemCategoryDataService
    {
        public ToDoItemCategoryDataService(Ang2ToDoItemsDbContext context) : base(context)
        {
        }
    }

}
