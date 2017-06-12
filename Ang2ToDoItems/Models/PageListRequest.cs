using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems.Models
{
    public class PageListRequest
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }

        public int GetSkipCount()
        {
            if (PageNumber > 0)
                return PageSize * (PageNumber - 1);
            else
                return 0;
        }
    }
}