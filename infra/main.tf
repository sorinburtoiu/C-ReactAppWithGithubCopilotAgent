terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Resource group
resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

# App Service Plan
resource "azurerm_app_service_plan" "main" {
  name                = "${var.prefix}-asp"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  kind                = "Linux"
  reserved            = true
  sku {
    tier = "Basic"
    size = "B1"
  }
}

# App Service for backend
resource "azurerm_linux_web_app" "backend" {
  name                = "${var.prefix}-backend"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  service_plan_id     = azurerm_app_service_plan.main.id
  site_config {
    application_stack {
      dotnet_version = "8.0"
    }
  }
  app_settings = {
    ASPNETCORE_ENVIRONMENT = "Production"
  }
}

# Storage Account (for static files or logs)
resource "azurerm_storage_account" "main" {
  name                     = lower(replace("${var.prefix}storage", "-", ""))
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# Output App Service URL
output "backend_url" {
  value = azurerm_linux_web_app.backend.default_hostname
}
