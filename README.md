# NodeJs_Projects
### 4 Projects







# Project 1 :
##  JWT-Basics - Node.js Project
This is a simple Node.js project for demonstrating the use of JSON Web Tokens (JWT) for authentication. It includes a basic dashboard that can only be accessed by authenticated users, and a registration and login system that generates and verifies JWTs. This README will guide you through the setup process and the available endpoints.

####  Getting Started
##### To get started, follow these instructions:

Clone the repository onto your local machine.
Install the necessary dependencies by running npm install.
Start the application by running npm start.
Open your web browser and navigate to http://localhost:3000/.
Endpoints
This project provides the following endpoints:

####  Register

##### POST /register
This endpoint allows a user to register for the application. You must provide the following parameters in the request body:

username (required): The username of the user.
email (required): The email of the user.
password (required): The password of the user.
Upon successful registration, the endpoint will return a JWT token.

####  Login
##### POST /login
This endpoint allows a user to login to the application and obtain a JWT token. You must provide the following parameters in the request body:

email (required): The email of the user.
password (required): The password of the user.
If the credentials are correct, the endpoint will return a JWT token.

####  Dashboard
#####  GET /dashboard
This endpoint returns a basic dashboard that can only be accessed by authenticated users. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

##  Conclusion
That's all there is to it! You should now have a working JWT-Basics project that demonstrates the use of JSON Web Tokens (JWT) for authentication. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!







# Project 2 :
##  Task Manager - Node.js Project
This is a simple Node.js project for managing tasks. It includes endpoints for getting all tasks, creating a task, getting a single task, updating a task, deleting a task, and editing a task. This project uses JSON Web Tokens (JWT) for authentication, so users must be logged in to perform any of these actions. This README will guide you through the setup process and the available endpoints.

####  Getting Started
##### To get started, follow these instructions:

Clone the repository onto your local machine.
Install the necessary dependencies by running npm install.
Start the application by running npm start.
Open your web browser and navigate to http://localhost:3000/.
Endpoints
This project provides the following endpoints:


#### -  Register
##### POST /register
This endpoint allows a user to register for the application. You must provide the following parameters in the request body:

username (required): The username of the user.
email (required): The email of the user.
password (required): The password of the user.

Upon successful registration, the endpoint will return a JWT token.

#### -  Login
##### POST /login
This endpoint allows a user to login to the application and obtain a JWT token. You must provide the following parameters in the request body:

email (required): The email of the user.
password (required): The password of the user.

If the credentials are correct, the endpoint will return a JWT token.

#### - Get all tasks
##### GET /tasks
This endpoint returns all tasks associated with the authenticated user. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

#### - Create task
##### POST /tasks
This endpoint allows a user to create a new task. You must provide the following parameters in the request body:


To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

#### - Get single task
##### GET /tasks/:id
This endpoint returns a single task associated with the authenticated user. You must provide the ID of the task in the request URL. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

#### - Update task
##### PUT /tasks/:id
This endpoint allows a user to update an existing task. You must provide the ID of the task in the request URL, and the following parameters in the request body:

To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

#### - Delete task
##### DELETE /tasks/:id

This endpoint allows a user to delete an existing task. You must provide the ID of the task in the request URL. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

#### - Edit task
##### PATCH /tasks/:id
This endpoint allows a user to edit an existing task. You must provide the ID of the task in the request URL, and the following parameters in the request body:

To access this endpoint, you must provide a valid JWT token in the Authorization header of the request


##  Conclusion
That's all there is to it! You should now have a working Task Manager project that allows you to manage tasks. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!









# Project 3 :
## Jobs API with Token-Based Authentication - Node.js Project
This is a simple Node.js project for managing jobs, with token-based authentication. It allows users to perform basic CRUD operations on jobs, including creating, reading, updating, and deleting jobs, after authenticating themselves with a token. Additionally, users can register and login to obtain a token. This README will guide you through the setup process and the available endpoints.

####  Getting Started
##### To get started, follow these instructions:

Clone the repository onto your local machine.
Install the necessary dependencies by running npm install.
Start the application by running npm start.
Open your web browser and navigate to http://localhost:3000/.
Endpoints
This project provides the following endpoints:

####  Register
##### POST /register
This endpoint allows a user to register for the application. You must provide the following parameters in the request body:

name (required): The name of the user.
email (required): The email of the user.
password (required): The password of the user.
####  Login
##### POST /login
This endpoint allows a user to login to the application and obtain a JWT token. You must provide the following parameters in the request body:

email (required): The email of the user.
password (required): The password of the user.
If the credentials are correct, the endpoint will return a JWT token.

####  Get all jobs
##### GET /jobs
This endpoint returns a list of all jobs. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

####  Create job
#####  POST /jobs
This endpoint allows you to create a new job. You must provide the following parameters in the request body:


To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.


####  Get single job
##### GET /jobs/:id
This endpoint returns a single job with the specified ID. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

####  Update job
##### PUT /jobs/:id
This endpoint allows you to update an existing job. You must provide the following parameters in the request body:


To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.


#### Delete job
##### DELETE /jobs/:id
This endpoint allows you to delete a job with the specified ID. To access this endpoint, you must provide a valid JWT token in the Authorization header of the request.

##  Conclusion
That's all there is to it! You should now have a working Jobs API project that allows you to manage jobs, with token-based authentication. Additionally, users can register and login to obtain a token. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!
