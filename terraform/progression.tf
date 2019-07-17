provider "azurerm" {
    version = "=1.28.0"
}

variable "webname" {
    type = "string"
    default = "progression-framework"
}

resource "azurerm_resource_group" "rg-progression-framework" {
    name     = "RG-Progression-Framework"
    location = "North Europe"
}

resource "azurerm_storage_account" "progressionframework" {
    name = "briprgfwk140916"
    resource_group_name = "${azurerm_resource_group.rg-progression-framework.name}"
    location = "${azurerm_resource_group.rg-progression-framework.location}"
    account_tier = "Standard"
    account_replication_type  = "LRS"
    account_kind = "StorageV2"
}

resource "null_resource" "azure-login" {
  provisioner "local-exec" {
    command = "az login --service-principal -u %ARM_CLIENT_ID% -p %ARM_CLIENT_SECRET% --tenant %ARM_TENANT_ID%"
    }
  depends_on = ["azurerm_storage_account.progressionframework"]
}

resource "null_resource" "progression-framework-static" {
  provisioner "local-exec" {
    command = "az storage blob service-properties update --account-name ${azurerm_storage_account.progressionframework.name} --static-website  --index-document index.html --404-document 404.html"
    }
  depends_on = ["null_resource.azure-login"]
}

resource "azurerm_cdn_profile" "progressionframework-cdn-profile" {
  name                = "${var.webname}-cdn-profile"
  location            = "${azurerm_resource_group.rg-progression-framework.location}"
  resource_group_name = "${azurerm_resource_group.rg-progression-framework.name}"
  sku                 = "Standard_Microsoft"
  depends_on = ["null_resource.progression-framework-static"]
}

resource "azurerm_cdn_endpoint" "progressionframework-cdn-endpoint" {
  name                = "${var.webname}-cdn-endpoint"
  profile_name        = "${azurerm_cdn_profile.progressionframework-cdn-profile.name}"
  location            = "${azurerm_resource_group.rg-progression-framework.location}"
  resource_group_name = "${azurerm_resource_group.rg-progression-framework.name}"
  is_http_allowed     = "false"
  optimization_type   = "GeneralWebDelivery"
  origin_host_header  = replace("${azurerm_storage_account.progressionframework.primary_web_endpoint}","https://","")
  querystring_caching_behaviour = "IgnoreQueryString"
  
  origin {
    name      = "assets"
    host_name = replace("${azurerm_storage_account.progressionframework.primary_web_endpoint}","https://","")
    https_port = "443"
  }
  depends_on = ["azurerm_cdn_profile.progressionframework-cdn-profile"]
}