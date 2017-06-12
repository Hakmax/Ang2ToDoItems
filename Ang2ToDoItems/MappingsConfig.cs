using Ang2ToDoItems.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems
{
    public static class MappingsConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(AddMappings);
        }

        public static void AddMappings(AutoMapper.IMapperConfigurationExpression expr)
        {
            expr.AddProfile<Models.Api.ToDoItemApiModelProfile>();
            expr.AddProfile<CategoryMappingProfile>();
        }
    }
}