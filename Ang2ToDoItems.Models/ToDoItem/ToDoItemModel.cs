using Ang2ToDoItems.Common.Enums;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.ToDoItem
{
    public class ToDoItemModel:ModelWithName<int>
    {
        public string Comment { get; set; }
        public ToDoItemCategoryModel Category { get; set; }
        public ToDoItemStatus Status { get; set; }
    }

    internal class ToDoItemModelMappingProfile:Profile
    {
        public ToDoItemModelMappingProfile()
        {
            CreateMap<Data.Entities.ToDoItem, ToDoItemModel>();
            CreateMap<ToDoItemModel,Data.Entities.ToDoItem>();
        }
    }
}
