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
using System.ComponentModel.DataAnnotations;
using Ang2ToDoItems.Models.Result;
using AutoMapper.QueryableExtensions;
using AutoMapper;

namespace Ang2ToDoItems.Services.Identity
{
    internal class UserService : IUserService
    {
        private readonly Lazy<ApplicationUserManager> _userManager;
        private readonly Lazy<ApplicationRoleManager> _roleManager;
        private readonly Lazy<IClientProfileDataService> _clientProfileDataService;
        private readonly Lazy<IUnitOfWork> _unitOfWork;
        private readonly Lazy<Ang2ToDoItemsDbContext> _dbContext;
        public UserService(Lazy<IUnitOfWork> unitOfWork, Lazy<ApplicationUserManager> userManager,
            Lazy<IClientProfileDataService> clientProfileDataService,
            Lazy<ApplicationRoleManager> roleManager,
            Lazy<Ang2ToDoItemsDbContext> dbContext)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _clientProfileDataService = clientProfileDataService;
            _roleManager = roleManager;
            _dbContext = dbContext;
        }

        public async Task<ClaimsIdentity> Auth(string userName, string password)
        {
            ClaimsIdentity claims = null;
            var appUser = await _userManager.Value.FindAsync(userName, password);
            if (appUser != null)
            {
                claims = await _userManager.Value.CreateIdentityAsync(appUser,
                    DefaultAuthenticationTypes.ApplicationCookie);
                claims.AddClaim(new Claim("LoginDate", DateTime.Now.ToString()));
            }
            return claims;
        }

        public async Task<RegisterUserResult> CreateUser(RegisterUserModel user)
        {
            var result = new RegisterUserResult();
            var validationContext = new System.ComponentModel.DataAnnotations.ValidationContext(user);
            IList<ValidationResult> errors = new List<ValidationResult>();

            if (Validator.TryValidateObject(user, validationContext, errors, true))
            {
                var appUSer = await _userManager.Value.FindByEmailAsync(user.Email);
                if (appUSer == null)
                {
                    appUSer = new Data.Entities.Identity.ApplicationUser { Email = user.Email, UserName = user.UserName };
                    var res = _userManager.Value.Create(appUSer);
                    if (res.Errors.Count() > 0)
                        result.Status = RegisterUserResultStatus.Failed;
                    //{ Message = res.Errors.FirstOrDefault() };
                    var addPassResult = _userManager.Value.AddPassword(appUSer.Id, user.Password);
                    if (addPassResult.Succeeded)
                    {
                        //var roleResult= _unitOfWork.ApplicationUserManager.AddToRole(appUSer.Id, user.Role);
                        /*var clientProfile = new ClientProfile { ApplicationUserId = appUSer.Id, Address = user.Address, Name = user.Name };
                        _clientProfileDataService.Value.Create(clientProfile);*/
                        var savedCount = await _unitOfWork.Value.SaveAsync();
                    }
                    else
                    {
                        result.Status = RegisterUserResultStatus.Failed;
                        result.Errors.Add("Пароль не удовлетворяет требованиям безопасности.");
                    }
                }
                else
                {
                    result.Status = RegisterUserResultStatus.UserAlreadyExists;
                }
            }
            else
            {
                result.Errors = errors.Select(x => x.ErrorMessage).Distinct().ToList();
                result.Status = RegisterUserResultStatus.Failed;
            }
            return result;
        }

        public Models.Identity.ClientProfile GetCientProfile(string userId)
        {
            var profile = _clientProfileDataService.Value.Query().Where(x => x.ApplicationUserId == userId)
                .ProjectTo<Models.Identity.ClientProfile>().FirstOrDefault();
            var user = _userManager.Value.FindById(userId);
            if(user!=null)
            {
                if (profile == null)
                {
                    profile = new Models.Identity.ClientProfile();
                    profile.BirthDate = DateTime.Now;
                }
                profile.Email = user.Email;
            }
            return profile;
        }   

        public void SaveProfile(Models.Identity.ClientProfile profile, string userId)
        {
            var user = _dbContext.Value.Users.FirstOrDefault(x=>x.Id==userId);
            if(user!=null)
            {
                var dbProfile = _clientProfileDataService.Value.Query().FirstOrDefault(x => x.ApplicationUserId == userId);
                if(!string.IsNullOrWhiteSpace(profile.Email) && !user.Email.Equals(profile.Email,StringComparison.CurrentCultureIgnoreCase))
                {
                    if (_dbContext.Value.Users.Any(x => x.Email.Equals(profile.Email, StringComparison.CurrentCultureIgnoreCase) && x.Id != userId))
                    {

                    }
                    else
                        user.Email = profile.Email;
                }

                if(dbProfile==null)
                {
                    dbProfile = Mapper.Map<Data.Entities.Identity.ClientProfile>(profile);
                    dbProfile.ApplicationUserId = userId;
                    _clientProfileDataService.Value.Create(dbProfile);
                }
                else
                {
                    Mapper.Map(profile, dbProfile);
                }
                _unitOfWork.Value.Save();
            }
        }


        public void Dispose()
        {
            //GC.SuppressFinalize(this);
        }
    }
}
