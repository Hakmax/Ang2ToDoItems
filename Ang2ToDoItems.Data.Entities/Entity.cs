using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Entities
{
    public class Entity<T>
    {   
        public T Id { get; set; }
    }


    public class EntityWithName<T> : Entity<T>
    {
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
    }

}
