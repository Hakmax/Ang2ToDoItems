using Newtonsoft.Json;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Ang2ToDoItems
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            JsonSerializerSettings jsonSetting = new JsonSerializerSettings();
            jsonSetting.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
            var cnfg = GlobalConfiguration.Configuration;
            cnfg.Formatters.JsonFormatter.SerializerSettings = jsonSetting;
        }
    }
}
