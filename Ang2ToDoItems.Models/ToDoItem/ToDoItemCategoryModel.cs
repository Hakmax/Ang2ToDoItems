using Ang2ToDoItems.Data.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.ToDoItem
{
    public class ToDoItemCategoryModel:ModelWithName<int>
    {
    }

    internal class ToDoItemCategoryModelMappingProfile:Profile
    {
        public ToDoItemCategoryModelMappingProfile()
        {
            CreateMap<ToDoItemCategory, ToDoItemCategoryModel>();
            CreateMap<ToDoItemCategoryModel,ToDoItemCategory>();
        }
    }
}
