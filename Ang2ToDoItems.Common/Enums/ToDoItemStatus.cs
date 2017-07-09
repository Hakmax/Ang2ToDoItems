using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Common.Enums
{
    public enum ToDoItemStatus
    {
        [EnumMember(Value = "Новый")]
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
