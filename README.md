# SoluLab-Assignment
The MongoDB Atlas database is being used to perform CRUD (Create, Read, Update, Delete) operations through the utilization of the Node.js and Express.js framework.

## Installation

- **Open Terminal**
```sh
https://github.com/jaylogin9/SoluLab-Assignment.git
```
* **cd SoluLab-Assignment**

* ** Open the browser and Log-in to [MongoDB Atlas](https://account.mongodb.com/account/login?nds=true)**

*  **Creating a Cluster**

* **Configuring the Cluster **:- Add new user and create  username and password

* **Getting the Connection String**


## Requirements 

* Go to the SoluLab-Assignment directory.
```sh
cd SoluLab-Assignment.
```
* Install npm in local machine.
```sh
 npm -init -y
```
* npm packages.
```sh
npm -i dotenv express mongoose nodemon
```
* Include the module in the package.json file
```sh
"type": "module", 
```
* Include the start script in the package.json file
```sh
 "start": "nodemon index"
```
* Create .env and paste the Connection String.
```sh
MONGO_DB= url
```
* Start the server.
```sh
nodemon index
```
* Server  listening on:-
```sh
localhost:7000
```


## Postman API documentation.

https://documenter.getpostman.com/view/25879278/2s93CExxCr

## License

MIT



