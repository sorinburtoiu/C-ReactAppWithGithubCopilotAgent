# React SPA App with ASP.NEt Core backend generated with Github Copilot Agent Mode

## Overview

This project is a full-stack web application built with a modern .NET and React architecture, designed for scalability, maintainability, and cloud readiness.
It was generated with Github Copilot Agent
---

## Solution Structure

- **Frontend**: `reactappwithgithubcopilotagent.client`
  - React application using TypeScript and Vite for fast development and builds.
  - ESLint configuration for code quality.
  - Fetches and displays weather information from the backend.

- **Backend**: `ReactAppWithGithubCopilotAgent.Server`
  - ASP.NET Core Web API (targeting .NET 8).
  - Provides API endpoints (e.g., weather data) to the frontend.
  - Includes Swagger/OpenAPI for API documentation.
  - Dockerfile for containerization.

- **App Host**: `ReactAppWithGithubCopilotAgent.AppHost`
  - Uses .NET Aspire (Aspire.AppHost.Sdk) to orchestrate and host the backend service.
  - Supports local development and service discovery.

- **Service Defaults**: `ReactAppWithGithubCopilotAgent.ServiceDefaults`
  - Shared configuration and extensions for resilience, health checks, OpenTelemetry, and service discovery.
  - Follows .NET Aspire best practices.

---

## Key Features

- **Modern Frontend**: Fast, type-safe React app with Vite and TypeScript.
- **Robust Backend**: .NET 8 Web API with best practices for API development.
- **Cloud-Ready**: Docker support and Aspire orchestration for easy deployment and scalability.
- **Observability**: Integrated health checks and OpenTelemetry for monitoring.
- **Maintainability**: Shared service defaults and configuration for consistency across services.

---

## Getting Started

1. **Install Prerequisites**:
   - [.NET 8 SDK](https://dotnet.microsoft.com/download)
   - [Node.js & npm](https://nodejs.org/)

2. **Restore and Build**:
   - Restore NuGet packages and build the .NET solution:
     ```powershell
     dotnet restore
     dotnet build
     ```
   - Install frontend dependencies:
     ```powershell
     cd reactappwithgithubcopilotagent.client
     npm install
     ```

3. **Run the Application**:
   - Start the backend:
     ```powershell
     dotnet run --project ReactAppWithGithubCopilotAgent.Server
     ```
   - In a new terminal, start the frontend:
     ```powershell
     cd reactappwithgithubcopilotagent.client
     npm run dev
     ```

4. **Access the App**:
   - Frontend: [http://localhost:5173](http://localhost:5173) (default Vite port)
   - Backend API/Swagger: [https://localhost:5001/swagger](https://localhost:5001/swagger) (or as configured)

---

## Project Highlights

- **.NET Aspire**: Used for orchestrating services, enabling service discovery, and providing a foundation for cloud-native development.
- **OpenTelemetry**: Built-in support for distributed tracing and observability.
- **Service Discovery & Resilience**: Shared defaults for robust microservice communication.
- **Docker Support**: Easily containerize and deploy the backend.

---

## References
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [.NET Aspire](https://learn.microsoft.com/dotnet/aspire/)
- [OpenTelemetry](https://opentelemetry.io/)
- [ASP.NET Core](https://learn.microsoft.com/aspnet/core/)

---

## MCP - Model Context Protocol
https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022

---

*Generated on May 23, 2025*
