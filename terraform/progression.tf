provider "azurerm" {
    version = "=1.28.0"
    subscription_id = "${var.subscription_id}"
    client_id       = "${var.client_id}"
    client_secret   = "${var.client_secret}"
    tenant_id       = "${var.tenant_id}"
}

resource "azurerm_resource_group" "rg-progression-framework" {
    name     = "RG-Progression-Framework"
    location = "North Europe"
}

resource "azurerm_storage_account" "progressionframework" {
    name = "progressionframework"
    resource_group_name = "${azurerm_resource_group.rg-progression-framework.name}"
    location = "${azurerm_resource_group.rg-progression-framework.location}"
    account_tier = "Standard"
    account_replication_type  = "LRS"
    account_kind = "StorageV2"
}

resource "null_resource" "progression-framework-static" {
  provisioner "local-exec" {
    command = "az storage blob service-properties update --account-name ${azurerm_storage_account.rg-progressionframework.name} --static-website  --index-document index.html --404-document 404.html"
  }
  depends_on = ["azurerm_storage_account.progressionframework"]
}