using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementWeb.Models
{
	public class EmployeeModel
	{
        public int employeeId { get; set; }

        [Required(ErrorMessage = "Ad alanı gereklidir.")]
        public string firstName { get; set; } = null!;

        [Required(ErrorMessage = "Soyad alanı gereklidir.")]
        public string lastName { get; set; } = null!;

        [Required(ErrorMessage = "Cinsiyet alanı gereklidir.")]
        public string gender { get; set; } = null!;

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Doğum tarihi alanı gereklidir.")]
        public DateTime birthDate { get; set; }

        [Required(ErrorMessage = "E-posta adresi alanı gereklidir.")]
        [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz.")]
        public string email { get; set; } = null!;

        [Required(ErrorMessage = "Telefon numarası alanı gereklidir.")]
        [RegularExpression(@"^5\d{9}$", ErrorMessage = "Geçerli bir telefon numarası giriniz. Örn: 5XXXXXXXXX")]
        public string phoneNumber { get; set; } = null!;
    }
}
