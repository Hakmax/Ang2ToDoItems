using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems.Models
{
    public class ListResponse<TEntity> where TEntity : class
    {
        public int TotalCount { get; set; }
        public IEnumerable<TEntity> Items { get; set; }
    }
}