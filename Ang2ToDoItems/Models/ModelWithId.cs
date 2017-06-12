using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang2ToDoItems.Models
{
    public class ModelWithId<T>
    {
        public T Id { get; set; }
    }

    public class ModelWithName<T>:ModelWithId<T>
    {
        public string Name { get; set; }
    }
}