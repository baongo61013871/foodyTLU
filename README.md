<<<<<<< HEAD
# Foody TLU Project.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  
## How to run this project?

In the project directory, you can run:

### CLone this repository

git clone https://github.com/baongo61013871/foodyTLU.git
cd foodyTLU

### Install dependencies for both frontend and backend:
 -Install backend dependencies:
   - cd backend
   - npm install
     

 -Install frontend dependencies
  - cd ../frontend
  - npm install

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Configure env file : 
- Back-end :
 - NODE_ENV=development
 - PORT= your_port

- Front-end:
    -REACT_APP_BACKEND_URL =http://localhost:(your_back-end_port)

### Import database : foody_database.sql
### Update config file in back-end in config/config.json:
  config.json :
     "development": {
    "username": "root",
    "password": null,
    "database": "your_dabase_name",
    "host": "127.0.0.1",
    "dialect": "your_DBMS",
    "logging": false
  },

### Running this application
   - cd backend
   
   - npm start
-----------------------------------

   - cd ../frontend
   - npm start

   - The backend will be running on http://localhost:....(port) and the frontend on http://localhost:...(port). Make sure both are running concurrently for full functionality
## Account Login:
 email: baongo610@gmail.com
 password: bao610
