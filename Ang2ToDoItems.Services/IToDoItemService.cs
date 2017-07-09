using Ang2ToDoItems.Common;
using Ang2ToDoItems.Models;
using Ang2ToDoItems.Models.ToDoItem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Services
{
    public interface IToDoItemService
    {
        ListResponse<ToDoItemModel> GetUserToDoItems(PageListRequest request, string userId);
        ToDoItemModel GetUserToDoItem(int id, string userId);
        void CreateUserToDoItem(ToDoItemModel model, string userId);
        void UpdateUserToDoItem(ToDoItemModel model, string userId);
        bool DeleteUserToItem(int id, string userId);

        IList<ToDoItemCategoryModel> GetUserToDoItemCategories(string userId);
        void CreateToDoItemCategory(ModelWithName<int> category, string userId);
        void UpdateToDoItemCategory(ModelWithName<int> category, string userId);
        bool DeleteUserToDoItemCategory(int id, string userId);

    }
}
