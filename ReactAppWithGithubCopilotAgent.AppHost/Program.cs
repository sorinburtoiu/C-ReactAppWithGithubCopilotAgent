var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.ReactAppWithGithubCopilotAgent_Server>("reactappwithgithubcopilotagent-server");
builder.AddProject<Projects.reactappwithgithubcopilotagent_client>("reactappwithgithubcopilotagent-client")
    .WithEndpoint(56117, scheme: "http", name: "frontend-vite"); // Expose frontend in dashboard with valid name

builder.Build().Run();
