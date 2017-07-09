using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Models.ToDoItem;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models
{
    public static class ModelsMappingConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(AddMappings);
        }

        public static void AddMappings(IMapperConfigurationExpression config)
        {
            config.AddProfile<ClientProfileMappingProfile>();
            config.AddProfile<ToDoItemCategoryModelMappingProfile>();
            config.AddProfile<ToDoItemModelMappingProfile>();
        }
    }
}
