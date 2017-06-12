using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ang2ToDoItems.Controllers
{
    public class ToDoItemController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}