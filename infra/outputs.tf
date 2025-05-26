output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

output "backend_url" {
  value = azurerm_linux_web_app.backend.default_hostname
}
