using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ang2ToDoItems.Data.Entities.Identity;
using System.Data.Entity;

namespace Ang2ToDoItems.Data.Services
{
    public class Ang2ToDoItemsDbContext:IdentityDbContext<ApplicationUser>
    {
        public const string ConnectionStringName = "DefaultConnection";
        public DbSet<ClientProfile> ClientProfiles { get; set; }

        public Ang2ToDoItemsDbContext() :base(ConnectionStringName) { }

        public Ang2ToDoItemsDbContext(string connectionString) : base(connectionString) { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<System.Data.Entity.ModelConfiguration.Conventions.PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
