#!/bin/bash

SECRET_VALUE=$1
RANDOM_NAME=$2
GITHUB_TOKEN=$3
BACKEND_URL=$4

# Loop through each secret and remove it
for secret in $(gh secret list --json name --jq '.[] | .name'); do
  gh secret remove $secret
done

# gh auth login
gh auth login --with-token $GITHUB_TOKEN
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN -b$SECRET_VALUE
gh secret set VITE_APP_BACKEND_URL -b$BACKEND_URL
rm -rf .github/workflows/azure-static-web-apps-*.yml

cp templates/azure-swa-terraform.yml .github/workflows/azure-static-web-apps-$RANDOM_NAME.yml