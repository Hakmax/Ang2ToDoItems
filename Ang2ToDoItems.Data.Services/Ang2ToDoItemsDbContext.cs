using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ang2ToDoItems.Data.Entities.Identity;
using System.Data.Entity;
using System.Data.Entity.Infrastructure.Annotations;
using System.ComponentModel.DataAnnotations.Schema;
using Ang2ToDoItems.Data.Entities;

namespace Ang2ToDoItems.Data.Services
{
    public class Ang2ToDoItemsDbContext:IdentityDbContext<ApplicationUser>
    {
        public const string ConnectionStringName = "DefaultConnection";
        public DbSet<ClientProfile> ClientProfiles { get; set; }
        public DbSet<ToDoItem> ToDoItems { get; set; }
        public DbSet<ToDoItemCategory> ToDoItemCategories { get; set; }

        public Ang2ToDoItemsDbContext() :base(ConnectionStringName) { }

        public Ang2ToDoItemsDbContext(string connectionString) : base(connectionString) { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<System.Data.Entity.ModelConfiguration.Conventions.PluralizingTableNameConvention>();
            modelBuilder.Entity<ApplicationUser>().Property(x => x.Email).HasColumnAnnotation(IndexAnnotation.AnnotationName, new IndexAnnotation(new IndexAttribute() { IsUnique = true }));
            /*modelBuilder.Entity<ClientProfile>().HasKey(x => x.Id).Property(x => x.Id)
                .HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None)
                .HasMaxLength(126);
            modelBuilder.Entity<ApplicationUser>().HasOptional(x => x.ClientProfile).WithRequired(x => x.ApplicationUser).
                Map(x => x.MapKey("Id"));*/

            base.OnModelCreating(modelBuilder);
        }
    }
}
