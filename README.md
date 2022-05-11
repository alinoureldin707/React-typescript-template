# `Introduction`

This template was made as default template for all react typescript projects. It took care with security purposes and authentication simplicity.

# `Installation`

```sh
  npm install
```

## `Structure`
- `src` : Contains all the application code
- `app` : Contains your code that is going to be configured and updated
- `components` : Are the reusable components
- `routes` : The routes that are corresponding to your pages
- `pages` : Lazy loaded pages that ensures not to reload a component unless it is used
- `utils` : Contains token validations, some useful functions and contants
- `redux` : That uses the redux toolkit and slices
- `contexts` : Contains the auth context that is used as hook in the useAuth in the `hooks` folder
- `services` : Has the localstorage operations
- `axios.ts` : configured version of the axios that has a base url for all the application 

## `Private Routes`

The private route allows routes to be visited under a condition usually the isAuthenticated route

## `Types`

Folder that defines the types of the request and response mainly

## `Package.json`

```sh{
  "name": "admin-panel",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.7.0",
    "@reduxjs/toolkit": "^1.8.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "dot-env": "^0.0.1",
    "jsonwebtoken": "^8.5.1",
    "jwt-decode": "^3.1.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "style-loader": "^3.3.1",
    "styled-components": "^5.3.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "dev": "webpack serve",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/preset-env": "^7.17.10",
    "@babel/preset-react": "^7.16.7",
    "@types/react-redux": "^7.1.24",
    "@types/styled-components": "^5.1.25",
    "@types/jest": "^27.5.0",
    "@types/jwt-decode": "^3.1.0",
    "@types/node": "^16.11.33",
    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.3",
    "@types/redux-logger": "^3.0.9",
    "ts-loader": "^9.3.0",
    "typescript": "^4.6.4",
    "web-vitals": "^2.1.4",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.9.0",
    "babel-loader": "^8.2.5",
    "css-loader": "^6.7.1",
    "file-loader": "^6.2.0",
    "sass": "^1.51.0",
    "sass-loader": "^12.6.0"
  }
}
```
