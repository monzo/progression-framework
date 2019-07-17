provider "azurerm" {
    version = "=1.28.0"
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

resource "null_resource" "progression-framework-static" {
  provisioner "local-exec" {
    command = "az login --service-principal -u %ARM_CLIENT_ID% -p %ARM_CLIENT_SECRET% --tenant %ARM_TENANT_ID%; az storage blob service-properties update --account-name ${azurerm_storage_account.progressionframework.name} --static-website  --index-document index.html --404-document 404.html"
  }

  depends_on = ["azurerm_storage_account.progressionframework"]
}
