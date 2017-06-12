using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Ang2ToDoItems.Models
{
    public class ToDoItem:ModelWithName<int>
    {
        public string Comment { get; set; }
        public ToDoItemStatus Status { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public int CategoryId { get; set; }

    }

    public enum ToDoItemStatus
    {
        [EnumMember(Value ="Новый")]
        New,

        [EnumMember(Value = "В работе")]
        InWork,

        [EnumMember(Value = "Приостановлен")]
        Pending,

        [EnumMember(Value = "Отменён")]
        Cancelled,

        [EnumMember(Value = "Завершён")]
        Finished
    }
}