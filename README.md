# NodeJs_Projects
### 4 Projects







# Project 1 :
##  JWT-Basics - Node.js Project
This is a simple Node.js project for demonstrating JWT (JSON Web Token) authentication. It allows users to register, login, and access a dashboard page. This README will guide you through the setup process and the available endpoints.

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
This endpoint allows a user to login to the application. You must provide the following parameters in the request body:

email (required): The email of the user.
password (required): The password of the user.
If the credentials are correct, the endpoint will return a JWT token.

####  Dashboard
#####  GET /dashboard
This endpoint allows a logged in user to access the dashboard page. The endpoint requires a valid JWT token to be passed in the Authorization header of the request.

##  Conclusion
That's all there is to it! You should now have a working JWT-Basics project that demonstrates JWT authentication. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!







# Project 2 :
##  Task Manager - Node.js Project
This is a simple Node.js project for managing tasks. It allows users to perform basic CRUD operations on tasks, including creating, reading, updating, and deleting tasks. This README will guide you through the setup process and the available endpoints.

####  Getting Started
##### To get started, follow these instructions:

Clone the repository onto your local machine.
Install the necessary dependencies by running npm install.
Start the application by running npm start.
Open your web browser and navigate to http://localhost:3000/.
Endpoints
This project provides the following endpoints:

#### - Get all tasks
##### GET /tasks
This endpoint returns a list of all tasks.

#### - Create task
##### POST /tasks
This endpoint allows you to create a new task. You must provide the following parameters in the request body:

#### - Get single task
##### GET /tasks/:id
This endpoint returns a single task with the specified ID.

#### - Update task
##### PUT /tasks/:id
This endpoint allows you to update an existing task. You must provide the following parameters in the request body:

#### - Delete task
##### DELETE /tasks/:id
This endpoint allows you to delete a task with the specified ID.

#### - Edit task
##### PATCH /tasks/:id
This endpoint allows you to edit a task with the specified ID. You must provide the following parameters in the request body:


##  Conclusion
That's all there is to it! You should now have a working Task Manager project that allows you to manage tasks. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!

# Project 3 :
## Jobs API - Node.js Project
This is a simple Node.js project for managing jobs. It allows users to perform basic CRUD operations on jobs, including creating, reading, updating, and deleting jobs. Additionally, users can register, login and authenticate themselves to access the protected endpoints. This README will guide you through the setup process and the available endpoints.

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
This endpoint allows a user to login to the application. You must provide the following parameters in the request body:

email (required): The email of the user.
password (required): The password of the user.
If the credentials are correct, the endpoint will return a JWT token.

####  Get all jobs
##### GET /jobs
This endpoint returns a list of all jobs.

####  Create job
#####  POST /jobs
This endpoint allows you to create a new job. You must provide the following parameters in the request body:


####  Get single job
##### GET /jobs/:id
This endpoint returns a single job with the specified ID.

####  Update job
##### PUT /jobs/:id
This endpoint allows you to update an existing job. You must provide the following parameters in the request body:


#### Delete job
##### DELETE /jobs/:id
This endpoint allows you to delete a job with the specified ID.

##  Conclusion
That's all there is to it! You should now have a working Jobs API project that allows you to manage jobs. Additionally, users can register, login and authenticate themselves to access the protected endpoints. Feel free to customize the project to your liking, and let us know if you have any questions or feedback. Happy coding!

