using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems.Models.Api
{
    public class ToDoItemApiModel:ModelWithName<int>
    {
        public string Comment { get; set; }
        public ModelWithName<int> Category { get; set; }
        public ToDoItemStatus Status { get; set; }
    }

    internal class ToDoItemApiModelProfile:Profile
    {
        public ToDoItemApiModelProfile()
        {
            CreateMap<ToDoItem, ToDoItemApiModel>();
            CreateMap<ToDoItem, ToDoItem>();
            CreateMap<ToDoItemApiModel, ToDoItem>().ForMember(dst=>dst.UpdatedOn, opt=>opt.Ignore())
                .ForMember(dst => dst.CreatedOn, opt => opt.Ignore())
                .ForMember(dst=>dst.CategoryId, opt=>opt.MapFrom(x=>x.Category.Id));
        }
    }
}