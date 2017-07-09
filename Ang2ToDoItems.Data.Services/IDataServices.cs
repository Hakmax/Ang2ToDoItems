using Ang2ToDoItems.Data.Entities;
using Ang2ToDoItems.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services
{
    public interface IClientProfileDataService:IDataService<ClientProfile,int>
    {
    }

    public interface IToDoItemDataService : IDataService<ToDoItem, int>
    {
    }
    public interface IToDoItemCategoryDataService : IDataService<ToDoItemCategory, int>
    {
    }
}
