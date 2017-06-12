using Ang2ToDoItems.Models;
using Ang2ToDoItems.Models.Api;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using Ang2ToDoItems.Helpers;

namespace Ang2ToDoItems.ApiControllers
{
    public class ToDoItemController : ApiController
    {
        private readonly SiteJsonDataHelper _siteJsonDataHelper = new SiteJsonDataHelper();
        public IHttpActionResult GetAll([FromUri]PageListRequest request)
        {
            var items = MapToDoItems(_siteJsonDataHelper.LoadToDoItemsFromAppData());
            var result = new ListResponse<ToDoItemApiModel>();
            result.TotalCount = items.Count;
            request.PageSize = 5;
            result.Items = items.Skip(request.GetSkipCount()).Take(request.PageSize).ToList();
            return Ok(result);
        }

        private IList<ToDoItemApiModel>MapToDoItems(IList<ToDoItem>items)
        {
            var result = new List<ToDoItemApiModel>();
            var categories = _siteJsonDataHelper.LoadCategoriesFromAppData();
            foreach(var item in items)
            {
                var todoItemApiModel = Mapper.Map<ToDoItemApiModel>(item);
                var category = categories.FirstOrDefault(x => x.Id == item.CategoryId);
                if (category != null)
                    todoItemApiModel.Category = Mapper.Map<ModelWithName<int>>(category);
                result.Add(todoItemApiModel);
            }
            return result;
        }

        public IHttpActionResult Get(int id)
        {
            var items = _siteJsonDataHelper.LoadToDoItemsFromAppData();
            return Ok(MapToDoItems(items).FirstOrDefault(x => x.Id == id));
        }

        public IHttpActionResult GetErr()
        {
            return Content(HttpStatusCode.BadRequest, new { Error = "error happened" });
        }

        public IHttpActionResult Post(ToDoItemApiModel model)
        {
            var items = _siteJsonDataHelper.LoadToDoItemsFromAppData();
            var newItem = Mapper.Map<ToDoItem>(model);
            newItem.Id = items.Count + 1;
            newItem.Status = ToDoItemStatus.New;
            items.Add(newItem);
            var jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText(_siteJsonDataHelper.AppDataToDoItemsJsonFilePath, jsonResult, System.Text.Encoding.Default);
            return Ok();
        }

        public IHttpActionResult Put(ToDoItemApiModel model)
        {
            var items = _siteJsonDataHelper.LoadToDoItemsFromAppData();
            var toUpdate = items.FirstOrDefault(x => x.Id == model.Id);
            if (toUpdate != null)
            {
                var mapped = Mapper.Map<ToDoItem>(model);
                Mapper.Map(mapped, toUpdate);
                toUpdate.UpdatedOn = DateTime.Now;

                var jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(items, Newtonsoft.Json.Formatting.Indented);
                File.WriteAllText(_siteJsonDataHelper.AppDataToDoItemsJsonFilePath, jsonResult,System.Text.Encoding.Default);
                return Ok();
            }
            return BadRequest();
        }


        
    }
}
