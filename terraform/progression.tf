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

resource "azurerm_app_service_plan" "progressionframework" {
    name = "progression-framework-plan"
    resource_group_name = "${azurerm_storage_account.progressionframework.name}"
    location = "${azurerm_resource_group.rg-progression-framework.location}"

    sku {
        tier = "Dynamic"
        size = "Y1"
    }
}

resource "azurerm_application_insights" "progressionframework" {
    name = "progression-framework-insights"
    resource_group_name = "${azurerm_resource_group.rg-progression-framework.name}"
    location = "UK South"
    application_type = "Node.JS"
}

resource "azurerm_function_app" "progression-framework-fn" {
    name = "progression-framework-fn"
    location = "${azurerm_resource_group.rg-progression-framework.location}"
    resource_group_name ="${azurerm_resource_group.rg-progression-framework.name}"
    app_service_plan_id = "${azurerm_app_service_plan.progressionframework.id}"
    storage_connection_string = "${azurerm_storage_account.progressionframework.primary_connection_string}"

    app_settings = {
        "APPINSIGHTS_INSTRUMENTATIONKEY" = "${azurerm_application_insights.progressionframework.instrumentation_key}"
    }

    depends_on = [azurerm_storage_account.progressionframework, azurerm_application_insights.progressionframework]
}