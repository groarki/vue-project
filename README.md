# IT Travels

**IT Travels** is a study project created during the **Vue.js** course at **GoIT**

## Project Description
IT Travels is a web application that allows users to save and manage their favorite places on an interactive map.
After logging in, users can create custom markers, edit them, and manage their personal list of locations.

The project follows the design [mockup](https://www.figma.com/design/iKGFonhDEQiTWjSf4pa3P6/IT-traveler?node-id=0-1&p=f&t=4McNTyIpR9PLr9Pb-0)

Deployed version on Vercel: [link](https://vue-project-weld-delta.vercel.app)

## Features
- User authentication (login / logout)
- Interactive map with custom markers
- Create, edit, and delete locations
- Persistent data storage

## Technologies
- Vue 3 (Composition API)
- Vue Router
- Axios
- TailwindCSS 
- Vercel 


## Installation and Running

1. Clone the repository:

```bash
git clone git@github.com:groarki/vue-project.git
```

2. Install all dependencies by running

```bash
npm install
```
3. Add your API Token for [MapBox API](https://www.mapbox.com)

 * Register/Login to get personal access token.
* You can find the name of the token in the .env.example file. 
* Create an .env file in the root directory and paste your accessToken from your account 

```bash
VITE_MAP_TOKEN=[your_access_token]
```

3. Run the project

```bash
npm run dev
```

Feel free to clone the repo and explore IT Travels locally or visit the deployed version!
