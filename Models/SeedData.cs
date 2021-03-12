using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MvcTasks.Data;

namespace MvcTasks.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MvcTasksContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<MvcTasksContext>>()))
            {
                // Look for any tasks
                if (context.Tasks.Any())
                {
                    return;// DB has been seeded
                }
                context.Tasks.AddRange(
                    new Tasks
                    {
                        Title = "Create CRUD Application",
                        CreateDate = DateTime.Parse("2021-03-09"),
                        DueDate = DateTime.Parse("2021-03-16"),
                        Description = "Create a basic Create Read Update and Display application for keeping track of tasks.",
                        IsCompleted = false
                    },
                    new Tasks
                    {
                        Title = "Get Started",
                        CreateDate = DateTime.Parse("2021-03-09"),
                        DueDate = DateTime.Parse("2021-03-16"),
                        Description = "Open a new MVC project and get the models, views and controllers all sorted out.",
                        IsCompleted = false
                    },
                    new Tasks
                    {
                        Title = "Connect Database",
                        CreateDate = DateTime.Parse("2021-03-09"),
                        DueDate = DateTime.Parse("2021-03-16"),
                        Description = "Initialize migration, create and update database.",
                        IsCompleted = false
                    },
                    new Tasks
                    {
                        Title = "Seed Database",
                        CreateDate = DateTime.Parse("2021-03-09"),
                        DueDate = DateTime.Parse("2021-03-16"),
                        Description = "Create code to seed database on initial application launch",
                        IsCompleted = false
                    },
                    new Tasks
                    {
                        Title = "Test functionality",
                        CreateDate = DateTime.Parse("2021-03-09"),
                        DueDate = DateTime.Parse("2021-03-16"),
                        Description = "Launch app and test the functionality that was built out",
                        IsCompleted = false
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
