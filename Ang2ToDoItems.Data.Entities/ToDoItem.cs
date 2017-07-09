using Ang2ToDoItems.Common.Enums;
using Ang2ToDoItems.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Entities
{
    public class ToDoItem:EntityWithName<int>
    {
        public string Comment { get; set; }
        public ToDoItemStatus Status { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
        public int? ToDoItemCategoryId { get; set; }
        public ToDoItemCategory ToDoItemCategory { get; set; }


    }
}
