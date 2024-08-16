# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## install packages

`npm install`

## Start the dev server

`npm run dev`

## Connect to backend

Copy the `.env.example` file to `.env` file:
`cp .env.example .env`
Set the `VITE_API_URL` to the backend URL with the port specified to the port exposed when starting up the backend
backend.

## Test Azure Web App Deployment

Manual Web App deployment can be performed using the Azure Portal, by
navigating to the Web App and selecting the 'Deployment > Deployment Center' link
in the left-hand navigation panel.

For deploying a frontend web app via `Static Web App`, you can manually create a `Static Web App` in the Azure Portal
with the `Source` set to `GitHub` and fill in the details for your frontend GitHub repository.
Under the `Build Details` section, the `Build Presets` should be detected as `React`, the `App location` can be left
as the default `/` and the `Output location` should be set to `./dist`.
This will automatically create a `GitHub Actions` workflow which will be added to branch specified.
This workflow will then build and deploy the frontend on a `push` or `pull request` event to the specified branch.

For more automated approaches, to deploying a frontend web app either
via a terraform provisioned `azurerm_linux_web_app` i.e. Linux VM or through
a Static Web App (terraform and/or az cli) then see [a more detailed
comparison of the approaches.](https://github.com/UCLH-DHCT/Informus-on-Azure/tree/9-simple-web-app-on-local?tab=readme-ov-file#comparing-frontend-deployment-approaches)

> [!NOTE]
> Remember to `git pull` regularly since workflows are often automatically
> generated and added to the remote GitHub repository if a branch without
> branch protection is specified in the set-up.
> Otherwise, a PR will be needed to add in each generated workflow.
