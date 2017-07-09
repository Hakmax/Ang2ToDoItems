using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems.Models
{
    public class Category:ModelWithName<int>
    {
        public string UserId { get; set; }
    }

    internal class CategoryMappingProfile:Profile
    {
        public CategoryMappingProfile()
        {
            CreateMap<Category, Category>().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<Category, ModelWithName<int>>();
        }
    }
}