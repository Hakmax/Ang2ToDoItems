using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.Result
{
    public class RegisterUserResult
    {
        public RegisterUserResultStatus Status { get; set; }
        public List<string> Errors { get; set; }
    }

    public enum RegisterUserResultStatus
    {
        Success,
        Failed,
        UserAlreadyExists
    }

}
