# Employee Management System

This project comprises two separate applications: the UI and the API for managing employee information. It's a simple CRUD system built using .NET Core and C#.

## UI Project
The UI project contains the user interface for interacting with the employee management system. It leverages MVC (Model View Controller) architecture. The UI is designed to be straightforward, focusing on functionality over elaborate styling.

### Getting Started
1. Clone the repository.
2. Open the project in Visual Studio.
3. Navigate to the `appsettings.json` file in the UI project.
4. Set the base URL for the API in the `BaseUrl` field.
5. Build and run the UI project.

### Functionality
- Displays a list of employees with details such as name, gender, and birthdate.
- Supports Create, Read, Update, and Delete (CRUD) operations.
- Validates employee data including email validity, phone number format, and required fields.

## API Project
The API project serves as the backend for managing employee data. It provides RESTful web services and handles requests from the UI.

### Setting Up
1. Clone the repository.
2. Open the project in Visual Studio.
3. Configure the database connection in the `appsettings.json` file.
4. Run the scripts provided (`CREATE` and `INSERT`) to set up the database with initial data.
5. Build and run the API project.

### Endpoints
- GET `/api/Employee`: Retrieves a list of all employees.
- POST `/api/Employee`: Creates a new employee.
- PUT `/api/Employee/{id}`: Updates an existing employee.
- DELETE `/api/Employee/{id}`: Deletes an employee by ID.

## Postman Collection
A Postman collection is included to facilitate testing of the API endpoints. Import the collection into Postman to test each service method separately.

### Usage
1. Open Postman.
2. Import the provided collection.
3. Test each endpoint with appropriate payloads for CRUD operations.

## Database Scripts
The project includes scripts for setting up the SQL Express database. Ensure the necessary configuration adjustments are made before execution.

### Running the Scripts
1. Connect to your SQL Express instance.
2. Execute the provided scripts (`CREATE` and `INSERT`) to initialize the database with required tables and sample data.

## Notes
- UI and API projects run independently but interact through service calls.
- Please refer to individual project README files for detailed instructions on setting up each project.
