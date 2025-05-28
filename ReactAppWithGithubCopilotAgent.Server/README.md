# ReactAppWithGithubCopilotAgent.Server

This folder contains the ASP.NET Core Web API backend for the ReactAppWithGithubCopilotAgent solution.

## Overview
- **Framework**: .NET 8 (ASP.NET Core Web API)
- **Purpose**: Provides RESTful API endpoints (e.g., weather data) for the frontend React application.
- **Containerization**: Includes a Dockerfile for building and running the backend as a container.
- **API Documentation**: Swagger/OpenAPI is enabled for easy API exploration and testing.

## Key Files
- `Program.cs`: Main entry point and configuration for the web API.
- `WeatherForecastController.cs`: Example controller providing sample weather data.
- `WeatherForecast.cs`: Model representing weather data.
- `appsettings.json` / `appsettings.Development.json`: Configuration files for environment-specific settings.
- `Dockerfile`: Instructions for building a Docker image of the backend.
- `CHANGELOG.md`: Project creation and setup notes.

## Development
1. **Restore and Build**
   ```powershell
   dotnet restore
   dotnet build
   ```
2. **Run Locally**
   ```powershell
   dotnet run --project ReactAppWithGithubCopilotAgent.Server
   ```
3. **API Access**
   - Swagger UI: [https://localhost:5001/swagger](https://localhost:5001/swagger) (default)
   - Weather API: [https://localhost:5001/weatherforecast](https://localhost:5001/weatherforecast)

## Docker
To build and run the backend in a container:
```powershell
docker build -t reactappwithgithubcopilotagent-server .
docker run -p 5001:5001 reactappwithgithubcopilotagent-server
```

## Project Structure
- Controllers, models, and configuration files are organized for clarity and maintainability.
- Designed for integration with the frontend React app and orchestration via .NET Aspire.

---

*For more details, see the root `README.md`.*
