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
Set the `VITE_API_URL` to the backend URL.

## Test Azure Deployment on PR

Workflow files generated when manually configuring for static web app and azure vm.
Static web app workflow is added to branch specified automatically.
Azure VM has many options
