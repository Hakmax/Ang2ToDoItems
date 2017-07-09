using Ang2ToDoItems.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace Ang2ToDoItems.Helpers
{
    public class SiteJsonDataHelper
    {
        public const string ToDoItemsJsonFileName = "todoItems.json";
        public const string CategoriesJsonFileName = "categories.json";
        public readonly string AppDataToDoItemsJsonFilePath = HostingEnvironment.MapPath($"~/App_Data/{ToDoItemsJsonFileName}");
        public readonly string AppDataCategoriesJsonFilePath = HostingEnvironment.MapPath($"~/App_Data/{CategoriesJsonFileName}");


        /*public IList<ToDoItem> LoadToDoItemsFromAppData()
        {
            var items = new List<ToDoItem>();
            var filePath = AppDataToDoItemsJsonFilePath;
            if (File.Exists(filePath))
            {
                string fileContent = File.ReadAllText(filePath, System.Text.Encoding.Default);
                if (!string.IsNullOrWhiteSpace(fileContent))
                {
                    items = Newtonsoft.Json.JsonConvert.DeserializeObject<List<ToDoItem>>(fileContent);
                }
            }
            return items;
        }*/

        public IList<Category> LoadCategoriesFromAppData()
        {
            var items = new List<Category>();
            var filePath = AppDataCategoriesJsonFilePath;
            if (File.Exists(filePath))
            {
                string fileContent = File.ReadAllText(filePath, System.Text.Encoding.Default);
                if (!string.IsNullOrWhiteSpace(fileContent))
                    items = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Category>>(fileContent);
            }
            return items;
        }
    }
}