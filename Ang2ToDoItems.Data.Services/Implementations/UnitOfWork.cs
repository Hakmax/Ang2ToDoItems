using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services.Implementations
{
    internal class UnitOfWork : IExtendedUnitOfWork
    {
        protected Ang2ToDoItemsDbContext Context { get; private set; }
        public bool AutoDetectChanges
        {
            get { return Context.Configuration.AutoDetectChangesEnabled; }
            set { Context.Configuration.AutoDetectChangesEnabled = value; }
        }

        public bool ValidateOnSave
        {
            get { return Context.Configuration.ValidateOnSaveEnabled; }
            set { Context.Configuration.ValidateOnSaveEnabled = value; }
        }

        public UnitOfWork(Ang2ToDoItemsDbContext context)
        {
            Context = context;
        }

        public DbContextTransaction BeginTransaction(System.Data.IsolationLevel? isolationLevel = null)
        {
            if (isolationLevel == null)
                return Context.Database.BeginTransaction();
            else
                return Context.Database.BeginTransaction(isolationLevel.Value);
        }

        public void Detach()
        {
            var entries = Context.ChangeTracker.Entries();
            foreach (var item in entries)
                item.State = EntityState.Detached;
        }

        public void Detach<T>() where T : class
        {
            var entries = Context.ChangeTracker.Entries<T>();
            foreach (var item in entries)
                item.State = EntityState.Detached;
        }

        public void Detach<T>(T entity) where T : class
        {
            var entry = Context.Entry(entity);
            entry.State = EntityState.Detached;
        }

        public void DetectChanges()
        {
            Context.ChangeTracker.DetectChanges();
        }

        public void ExecuteSqlCommand(string sql)
        {
            Context.Database.ExecuteSqlCommand(sql);
        }
        

        public int Save()
        {
            int res = 0;
            try
            {
                res = Context.SaveChanges();
            }
            catch(Exception e)
            {
                int i = 0;
            }

            return res;
        }

        public Task<int> SaveAsync()
        {
            return Context.SaveChangesAsync();
        }

        public Task<int> SaveAsync(CancellationToken cancellationToken)
        {
            return Context.SaveChangesAsync(cancellationToken);
        }
        
    }
}
