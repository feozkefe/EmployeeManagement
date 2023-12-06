using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementWeb.Models
{
	public class EmployeeModel
	{
        public int employeeId { get; set; }

        [Required]
        public string firstName { get; set; } = null!;

        [Required]
        public string lastName { get; set; } = null!;

        [Required]
        public string gender { get; set; } = null!;

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Required]
        public DateTime birthDate { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; } = null!;

        [Required]
        public string phoneNumber { get; set; } = null!;
    }
}
