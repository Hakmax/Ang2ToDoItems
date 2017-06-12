using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Ang2ToDoItems.Models.Identity;
using Ang2ToDoItems.Data.Services;
using Ang2ToDoItems.Data.Entities.Identity;
using Microsoft.AspNet.Identity;

namespace Ang2ToDoItems.Services.Identity
{
    internal class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ClaimsIdentity> Auth(UserModel user)
        {
            ClaimsIdentity claims = null;
            var appUser = await _unitOfWork.ApplicationUserManager.FindAsync(user.Email, user.Password);
            if (appUser != null)
            {
                claims = await _unitOfWork.ApplicationUserManager.CreateIdentityAsync(appUser,
                    DefaultAuthenticationTypes.ApplicationCookie);
                claims.AddClaim(new Claim("LoginDate", DateTime.Now.ToString()));
            }
            return claims;
        }

        public async Task<OperationResult> Create(UserModel user)
        {
            var appUSer =await _unitOfWork.ApplicationUserManager.FindByEmailAsync(user.Email);
            if(appUSer==null)
            {
                appUSer = new Data.Entities.Identity.ApplicationUser { Email = user.Email, UserName = user.Name  };
                var res = _unitOfWork.ApplicationUserManager.Create(appUSer);
                if (res.Errors.Count() > 0)
                    return new OperationResult { Message = res.Errors.FirstOrDefault() };
                var addPassResult= _unitOfWork.ApplicationUserManager.AddPassword(appUSer.Id, user.Password);
                //var roleResult= _unitOfWork.ApplicationUserManager.AddToRole(appUSer.Id, user.Role);
                var clientProfile = new ClientProfile { ApplicationUserId=appUSer.Id, Address = user.Address, Name = user.Name };
                _unitOfWork.ClientManager.Create(clientProfile);
                await _unitOfWork.SaveAsync();
                return new OperationResult { Succedeed = true, Message = "Регистрация успешно пройдена" };
            }
            else
            {
                return new OperationResult { Succedeed = false };
            }
        }

        public void Dispose()
        {
            _unitOfWork.Dispose();
        }

        public async Task SetInitialData(UserModel user, List<string> roles)
        {
            foreach (string roleName in roles)
            {
                var role = await _unitOfWork.ApplicationRoleManager.FindByNameAsync(roleName);
                if (role == null)
                {
                    role = new ApplicationRole { Name = roleName };
                    await _unitOfWork.ApplicationRoleManager.CreateAsync(role);
                }
            }
            await Create(user);
        }
    }
}
