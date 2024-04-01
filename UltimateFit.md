# 👊 💪 `UltimateFit` 💪 👊

## App Overview:

UltimateFit is a fitness app where users after registering, can log in and choose exercises according to specific muscle groups, and select them to build and save customized workout plans. They can also browse exercises with graphical demonstrations of proper form and technique, pull similar exercises from YouTube for additional exercise variety, and look for recipes according to their dietary preferences.

## Tech stack:

- React
- PostgreSQL
- Express
- Axios
- Node.js
- APIs
  - [https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/)
  - [https://rapidapi.com/h0p3rwe/api/youtube-search-and-download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)
  - [https://rapidapi.com/edamam/api/recipe-search-and-diet](https://rapidapi.com/edamam/api/recipe-search-and-diet)
- [https://mui.com/material-ui/getting-started/](https://material-ui.com/getting-started)

## User Stories:

#### As a Fitness Enthusiast:

- I want to register and log in to the fitness app to access personalized workout plans.
- I want to choose exercises based on specific muscle groups (e.g. legs, arms, abs) so that I can effectively target areas of my body.
- I want a user-friendly navigation interface to select multiple exercises for each muscle group so that I can create a workout plan that I can customize and adjust based on my preferences and fitness goals.
- I want graphical demonstrations of each exercise so that I can ensure proper form and technique while working out.
- I want access to a database of recipes and meal ideas so that I can plan nutritious meals in conjunction with my workouts according to my dietary preferences and restrictions(Strech #1)
- I would like the ability to pull similar exercises from YouTube for additional variety and inspiration in my workouts.(Strech #2)

## Setup

To get started with the project, follow the steps below:

### 1. Install Dependencies

Run the following command in each respective /ultimatefit and ultimatefit/backend directories to install the necessary dependencies:

```sh
cd frontend
npm install

cd ../backend
npm install
```

### 2. Run Webpack Development Server (Frontend)

To start the Webpack development server for the frontend, use the following command:

```sh
cd ultimatefit
npm start
```

This will launch the frontend application and make it accessible at [http://localhost:3000](http://localhost:3000) by default.

### 3. Run Backend Server

Before running the backend server, make sure you have PostgreSQL installed and configured.

Start PostgreSQL:

```sh
startpostgres
```

## Creating The DB

Use the `psql -U labber` command to login to the PostgreSQL server with the username `labber` and the password `labber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment. M1/M2 and WSL2 users can execute this command in their terminal.

Create a database with the command `CREATE DATABASE ultimatefit;`.

## Seeding

Run a \i backend/migration/schema.sql;

This command will seed the database with their tables.

## Run The Server

Run the following command to start the backend server:

```sh
cd backend
npm start
```

The backend server will be running at http://localhost:5000 by default.

Now, you have both the frontend and backend servers up and running. You can access the UltimateFit application in your web browser.

Enjoy using UltimateFit!
