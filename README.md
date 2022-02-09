# Introduction
Welcome to React-Bootcamp

## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [File Structure](#file_folder-file-structure)
- [Community](#cherry_blossom-community)
  - [Branches](#cactus-branches)
- [Resources](#page_facing_up-resources)

##  :beginner: About
This is  a project for handons material on React.js, including:
* React-Hooks
* Basic CRUD system
* Form using formik
* Fake server using json-server

## :zap: Usage
This is a great source for learn React.js

###  :electric_plug: Installation
- Clone this repository.
- Install node modules
```
$ npm install.
```

###  :package: Commands
- To run this project 
```
$ npm start.
```
- To run this fake server 
```
$ npm run server.
```
- To run this fake server & react in parallel 
```
$ npm run dev.
```


##  :wrench: Development

### :notebook: Pre-Requisites
- Node.js


###  :file_folder: File Structure

```
SRC
├── component
|     └──modal.jsx 
├── pages
|     ├── auth
│     |   ├── index.jsx
│     |   ├── login.jsx
│     │   └── register.jsx
|     ├── catalog
│     |   ├── byId.jsx
│     │   └── index.jsx
|     └── dashboard
│         ├── form.jsx
│         └── index.jsx
├── service
│     └── auth.js
├── styles
|     ├── component
|     └── pages
│     |   ├──  auth.scss
│     |   └──  catalog.jsx
│     |   
│     └── index.scss
├── App.jsx
├── index.css
├── index.js
├── env
├── db.json
├── package.json
└── README.md
```


 ### :cactus: Branches

1. **`react-hook`** is for hooks learning branch.

2. **`basic-crud`** is the very simple crud branch.

3. **`formik`** integrated formik on auth pages branch.

4. **`json-server`** integrated axios &  json-server for consume api crud branch.


##  :page_facing_up: Resources

- axios: https://axios-http.com/docs/api_intro
- formik : https://formik.org/docs/overview
- json-server  : https://github.com/typicode/json-server
- react router dom : https://reactrouter.com/docs/en/v6/getting-started/overview
- reactrap: reactstrap.github.io
- sass: https://sass-lang.com/
- yup : https://github.com/jquense/yup
