using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Ang2ToDoItems.Helpers;
using Ang2ToDoItems.Models;
using System.IO;
using AutoMapper;

namespace Ang2ToDoItems.ApiControllers
{
    public class CategoryController:ApiController
    {
        private readonly SiteJsonDataHelper _siteJsonDataHelper = new SiteJsonDataHelper();
        public IHttpActionResult GetAll()
        {
            var categories = _siteJsonDataHelper.LoadCategoriesFromAppData();
            return Ok(categories);
        }

        [HttpPost]
        public IHttpActionResult Post(Category category)
        {
            var curCategories= _siteJsonDataHelper.LoadCategoriesFromAppData();
            category.Id = curCategories.Count + 1;
            curCategories.Add(category);
            var categoriesJson = Newtonsoft.Json.JsonConvert.SerializeObject(curCategories, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText(_siteJsonDataHelper.AppDataCategoriesJsonFilePath, categoriesJson, System.Text.Encoding.Default);
            return Ok();
        }

        [HttpPut]
        public IHttpActionResult Put([FromBody] Category category)
        {
            var curCategories = _siteJsonDataHelper.LoadCategoriesFromAppData();
            var categoryToUpdate = curCategories.FirstOrDefault(x => x.Id == category.Id);
            if(categoryToUpdate!=null)
            {
                Mapper.Map(category, categoryToUpdate);
                var categoriesJson = Newtonsoft.Json.JsonConvert.SerializeObject(curCategories, Newtonsoft.Json.Formatting.Indented);
                File.WriteAllText(_siteJsonDataHelper.AppDataCategoriesJsonFilePath, categoriesJson, System.Text.Encoding.Default);
            }
            return Ok();
        }
    }
}