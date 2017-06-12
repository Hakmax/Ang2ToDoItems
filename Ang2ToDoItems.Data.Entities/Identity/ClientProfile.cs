using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Entities.Identity
{
    public class ClientProfile:EntityWithName<int>
    {
        public string Address { get; set; }

        public string ApplicationUserId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
