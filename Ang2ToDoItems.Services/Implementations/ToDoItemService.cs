using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ang2ToDoItems.Models.ToDoItem;
using Ang2ToDoItems.Data.Services;
using AutoMapper.QueryableExtensions;
using Ang2ToDoItems.Models;
using Ang2ToDoItems.Data.Entities;
using Ang2ToDoItems.Common;
using AutoMapper;

namespace Ang2ToDoItems.Services.Implementations
{
    internal class ToDoItemService : IToDoItemService
    {
        private readonly Lazy<IToDoItemDataService> _todoItemDataService;
        private readonly Lazy<IToDoItemCategoryDataService> _todoItemCategoryDataService;
        private readonly Lazy<IUnitOfWork> _unitOfWork;

        public ToDoItemService(Lazy<IToDoItemDataService> todoItemDataService,
            Lazy<IToDoItemCategoryDataService> todoItemCategoryDataService,
            Lazy<IUnitOfWork> unitOfWork)
        {
            _todoItemDataService = todoItemDataService;
            _todoItemCategoryDataService = todoItemCategoryDataService;
            _unitOfWork = unitOfWork;
        }

        public IList<ToDoItemCategoryModel> GetUserToDoItemCategories(string userId)
        {
            var userToDoItemCategories = _todoItemCategoryDataService.Value.Query().Where(x => x.ApplicationUserId == userId)
                .ProjectTo<ToDoItemCategoryModel>().ToList();
            return userToDoItemCategories;
        }

        public void CreateToDoItemCategory(ModelWithName<int>category, string userId)
        {
            if(!_todoItemCategoryDataService.Value.Query().Any(x => x.ApplicationUserId == userId &&
              x.Name == category.Name))
            {
                var newCategory = new ToDoItemCategory { Name = category.Name, ApplicationUserId = userId };
                _todoItemCategoryDataService.Value.Create(newCategory);
                _unitOfWork.Value.Save();
            }
        }

        public void UpdateToDoItemCategory(ModelWithName<int>category, string userId)
        {
            var categoryToUpdate = _todoItemCategoryDataService.Value.Query().FirstOrDefault(x => x.ApplicationUserId == userId
              && x.Id == category.Id);
            if(categoryToUpdate!=null)
            {
                if (categoryToUpdate.Name != category.Name)
                {
                    categoryToUpdate.Name = category.Name;
                    _unitOfWork.Value.Save();
                }
            }
        }

        public bool DeleteUserToDoItemCategory(int id, string userId)
        {
            var result = false;
            var categoryToDelete = _todoItemCategoryDataService.Value.Query().FirstOrDefault(x => x.ApplicationUserId == userId && x.Id == id);
            if(categoryToDelete!=null)
            {
                _todoItemCategoryDataService.Value.Delete(categoryToDelete);
                _unitOfWork.Value.Save();
                result = true;
            }
            return result;
        }

        public ListResponse<ToDoItemModel> GetUserToDoItems(PageListRequest request, string userId)
        {
            var baseQuery = _todoItemDataService.Value.Query().Where(x => x.ApplicationUserId == userId);
            int count = baseQuery.Count();
            var userToDoItems = baseQuery.OrderByDescending(x => x.Id).Skip(request.GetSkipCount()).Take(request.PageSize)
                .ProjectTo<ToDoItemModel>().ToList();

            return new ListResponse<ToDoItemModel>
            {
                TotalCount=count,
                Items=userToDoItems
            };
        }

        public ToDoItemModel GetUserToDoItem(int id, string userId)
        {
            var result = _todoItemDataService.Value.Query().Where(x => x.ApplicationUserId == userId && x.Id == id)
                .ProjectTo<ToDoItemModel>().FirstOrDefault();
            return result;
        }

        public void CreateUserToDoItem(ToDoItemModel model, string userId)
        {
            var newItem = Mapper.Map<ToDoItem>(model);
            newItem.ApplicationUserId = userId;
            _todoItemDataService.Value.Create(newItem);
            _unitOfWork.Value.Save();
        }

        public void UpdateUserToDoItem(ToDoItemModel model, string userId)
        {
            var itemToUpdate = _todoItemDataService.Value.Query().FirstOrDefault(x => x.Id == model.Id && x.ApplicationUserId == userId);
            if(itemToUpdate!=null)
            {
                Mapper.Map(model, itemToUpdate);
                _unitOfWork.Value.Save();
            }
        }

        public bool DeleteUserToItem(int id, string userId)
        {
            var result = false;
            var itemToDelete = _todoItemDataService.Value.Query().FirstOrDefault(x => x.Id == id && x.ApplicationUserId == userId);
            if(itemToDelete!=null)
            {
                _todoItemDataService.Value.Delete(itemToDelete);
                _unitOfWork.Value.Save();
                result = true;
            }
            return result;
        }
    }
}
