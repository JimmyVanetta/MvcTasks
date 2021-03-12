using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTasks.Models
{
    public class Tasks
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [Display(Name = "Created")]
        [DataType(DataType.Date)]
        public DateTime CreateDate { get; set; }

        [Display(Name = "Due Date")]
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }
        public string Description { get; set; }

        [Display(Name = "Completed")]
        public bool IsCompleted { get; set; }
    }
}
