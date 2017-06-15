using Ang2ToDoItems.Data.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services.Implementations
{
    internal abstract class DataService<TEntity, TKey>:IDataService<TEntity,TKey> where TEntity:Entity<TKey>
    {
        protected Ang2ToDoItemsDbContext Context { get; private set; }
        protected IDbSet<TEntity> DataSet { get { return Context.Set<TEntity>(); } }

        protected DataService(Ang2ToDoItemsDbContext context)
        {
            Context = context;
        }


        public IQueryable<TEntity> Set
        {
            get
            {
                return Context.Set<TEntity>();
            }
        }

        public virtual void Create(TEntity entity)
        {
            DataSet.Add(entity);
        }

        public virtual void Delete(TEntity entity)
        {
            DataSet.Remove(entity);
        }

        public TEntity Get(TKey key, params Expression<Func<TEntity, object>>[] includes)
        {
            return Query(includes).FirstOrDefault(m => ((object)m.Id == (object)key));
        }

        public IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes)
        {
            return includes.Aggregate(DataSet.AsQueryable(), (queryable, include) => queryable.Include(include));
        }

        public virtual void Update(TEntity entity, params Expression<Func<TEntity, object>>[] updateProperties)
        {
        }

    }
}
