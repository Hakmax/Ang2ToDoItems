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
using Ang2ToDoItems.Data.Services.Identity;

namespace Ang2ToDoItems.Services.Identity
{
    internal class UserService : IUserService
    {
        private readonly Lazy<ApplicationUserManager> _userManager;
        private readonly Lazy<ApplicationRoleManager> _roleManager;
        private readonly Lazy<IClientProfileDataService> _clientProfileDataService;
        private readonly Lazy<IUnitOfWork> _unitOfWork;
        public UserService(Lazy<IUnitOfWork> unitOfWork, Lazy<ApplicationUserManager> userManager,
            Lazy<IClientProfileDataService> clientProfileDataService,
            Lazy<ApplicationRoleManager> roleManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _clientProfileDataService = clientProfileDataService;
            _roleManager = roleManager;
        }

        public async Task<ClaimsIdentity> Auth(UserModel user)
        {
            ClaimsIdentity claims = null;
            var appUser = await _userManager.Value.FindAsync(user.Email, user.Password);
            if (appUser != null)
            {
                claims = await _userManager.Value.CreateIdentityAsync(appUser,
                    DefaultAuthenticationTypes.ApplicationCookie);
                claims.AddClaim(new Claim("LoginDate", DateTime.Now.ToString()));
            }
            return claims;
        }

        public async Task<OperationResult> CreateUser(UserModel user)
        {
            var appUSer = await _userManager.Value.FindByEmailAsync(user.Email);
            if (appUSer == null)
            {
                appUSer = new Data.Entities.Identity.ApplicationUser { Email = user.Email, UserName = user.Name };
                var res = _userManager.Value.Create(appUSer);
                if (res.Errors.Count() > 0)
                    return new OperationResult { Message = res.Errors.FirstOrDefault() };
                var addPassResult = _userManager.Value.AddPassword(appUSer.Id, user.Password);
                //var roleResult= _unitOfWork.ApplicationUserManager.AddToRole(appUSer.Id, user.Role);
                var clientProfile = new ClientProfile { ApplicationUserId = appUSer.Id, Address = user.Address, Name = user.Name };
                _clientProfileDataService.Value.Create(clientProfile);
                await _unitOfWork.Value.SaveAsync();
                return new OperationResult { Succedeed = true, Message = "Регистрация успешно пройдена" };
            }
            else
            {
                return new OperationResult { Succedeed = false };
            }
        }
        

        public void Dispose()
        {
            //GC.SuppressFinalize(this);
        }
    }
}
