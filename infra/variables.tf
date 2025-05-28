variable "resource_group_name" {
  description = "Name of the Azure Resource Group."
  type        = string
  default     = "aspire-react-rg"
}

variable "location" {
  description = "Azure region for deployment."
  type        = string
  default     = "westeurope"
}

variable "prefix" {
  description = "Prefix for resource naming."
  type        = string
  default     = "aspirereact"
}
