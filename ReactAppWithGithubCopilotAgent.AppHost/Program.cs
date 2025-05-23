var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.ReactAppWithGithubCopilotAgent_Server>("reactappwithgithubcopilotagent-server");

builder.Build().Run();
