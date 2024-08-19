#!/bin/bash

SECRET_VALUE=$1
RANDOM_NAME=$2
gh auth login
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN -b$SECRET_VALUE

cp templates/azure-swa-terraform.yml .github/workflows/azure-static-web-apps-$RANDOM_NAME.yml