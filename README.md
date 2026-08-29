# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Pitch Video
## Final Project
 Check out [this video](https://www.loom.com/share/9414d847e2514562901c297d8f582849), where I describe my 
 project and some challenges I faced while building it.

 ## News Explorer

News Explorer is a React application that allows users to search for articles by keyword using the News API. Its main purpose is to help users discover and curate relevant news from around the globe in a single, responsive interface.

## Live Deployment
View the live application here: [**https://Tecman8.github.io/github-final-project**](https://Tecman8.github.io/github-final-project)]

## Technologies Used
* **Frontend:** HTML5, CSS3, JavaScript, React (Vite)
* **Routing:** HashRouter
* **API Integration:** News API
* **Hosting:** GitHub Pages

## Download / Clone the Repository
bash
git clone <your-repository-url>
cd <project-folder-name>

## Install Dependencies
Install the required frontend packages: 
bash
npm install

## Configure Environment Variables
Create a '.env' file in your root directory to store your API key securely:
'env'
VITE_NEWS_API_KEY='your_actual_news_api_key_here'

## Start the Application Locally
Run the development server:
bash
npm run dev

Open [http://localhost:5173/github-final-project#/](http://localhost:5173/github-final-project#/) in your browser to view the application.

## Deployment to GitHub Pages

To compile and publish the latest version of the application to GitHub Pages, run the following automated script:

bash
npm run deploy

### Deployment Configuration Steps Note:
1. Ensure `base: '/github-final-project/'` is set inside your `vite.config.js` file.
2. Ensure the `homepage` URL property is correctly updated with your username inside `package.json`.
3. Go to your GitHub repository -> **Settings** -> **Pages** and ensure the source branch is set to `gh-pages`.











