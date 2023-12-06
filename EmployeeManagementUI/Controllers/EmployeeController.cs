using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using EmployeeManagementWeb.Models;

namespace EmployeeManagementWeb.Controllers
{
	public class EmployeeController : Controller
	{
		private readonly HttpClient _httpClient;

		public EmployeeController(IHttpClientFactory httpClientFactory)
		{
			_httpClient = httpClientFactory.CreateClient("EmployeeAPI");
		}

		public async Task<IActionResult> Index()
		{
			var response = await _httpClient.GetAsync("api/Employee");

			if (response.IsSuccessStatusCode)
			{
				var content = await response.Content.ReadAsStringAsync();
				var employees = JsonSerializer.Deserialize<List<EmployeeModel>>(content);
				return View(employees);
			}

			return View("Error");
		}

		public IActionResult Create()
		{
			return View();
		}

		[HttpPost]
        public async Task<IActionResult> Create([FromBody] JsonElement employeeJson)
        {
			var json = employeeJson.GetRawText();
            var data = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("api/Employee", data);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction(nameof(Index));
            }

            return View("Error");
        }

		public async Task<IActionResult> Edit(int id)
		{
			var response = await _httpClient.GetAsync($"api/Employee/{id}");

			if (response.IsSuccessStatusCode)
			{
				var content = await response.Content.ReadAsStringAsync();
				var employee = JsonSerializer.Deserialize<EmployeeModel>(content);
				return View(employee);
			}

			return View("Error");
		}

        [HttpPost]
        public async Task<IActionResult> Edit(int id, string employeeJson)
        {
            var data = new StringContent(employeeJson, Encoding.UTF8, "application/json");
            var response = await _httpClient.PutAsync($"api/Employee/{id}", data);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction(nameof(Index));
            }

            return View("Error");
        }

        public async Task<IActionResult> Delete(int id)
		{
			var response = await _httpClient.DeleteAsync($"api/Employee/{id}");

			if (response.IsSuccessStatusCode)
			{
				return RedirectToAction(nameof(Index));
			}

			return View("Error");
		}
	}
}
