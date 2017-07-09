using Ang2ToDoItems.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ang2ToDoItems.Data.Services
{
    public interface IDataService<TEntity, in TKey> where TEntity:IEntity<TKey>
    {
        IQueryable<TEntity> Set { get; }
        TEntity Get(TKey key, params Expression<Func<TEntity, object>>[] includes);
        IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes);

        void Create(TEntity entity);
        void Update(TEntity entity, params Expression<Func<TEntity, object>>[] updateProperties);
        void Delete(TEntity entity);

    }
}
