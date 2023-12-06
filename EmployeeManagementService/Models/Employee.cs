﻿namespace EmployeeManagementService.Models;

public class Employee
{
	public int EmployeeId { get; set; }
	public string FirstName { get; set; } = null!;
	public string LastName { get; set; } = null!;
	public string Gender { get; set; } = null!;
	public DateTime BirthDate { get; set; }
	public string Email { get; set; } = null!;
	public string PhoneNumber { get; set; } = null!;
}
