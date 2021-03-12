using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MvcTasks.Models;
using Microsoft.EntityFrameworkCore;

namespace MvcTasks.Data
{
    public class MvcTasksContext : DbContext
    {
        public MvcTasksContext (DbContextOptions<MvcTasksContext> options)
            : base(options)
        {
        }

        public DbSet<Tasks> Tasks { get; set; }
    }
}
