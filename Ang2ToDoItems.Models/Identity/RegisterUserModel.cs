using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.Identity
{
    public class RegisterUserModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Email-адрес имеет некорректный вид")]
        [MaxLength(255, ErrorMessage = "Email-адрес не должен быть длиной более 255 символов")]
        public string Email { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required, MinLength(6,ErrorMessage ="Минимальная длина парооля 6 символов")]
        public string Password { get; set; }

    }
}
