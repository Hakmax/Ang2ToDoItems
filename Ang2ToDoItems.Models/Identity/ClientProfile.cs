using AutoMapper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Models.Identity
{
    public class ClientProfile
    {
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime BirthDate { get; set; }

        [EmailAddress(ErrorMessage ="Email-адрес имеет некорректный формат.")]
        public string Email { get; set; }
    }

    internal class ClientProfileMappingProfile:Profile
    {
        public ClientProfileMappingProfile()
        {
            CreateMap<Data.Entities.Identity.ClientProfile, ClientProfile>();/*
                .ForMember(dst => dst.Email, opt => opt.MapFrom(x => x.ApplicationUser.Email));*/
            CreateMap<ClientProfile, Data.Entities.Identity.ClientProfile>();
        }
    }
}
