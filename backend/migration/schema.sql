
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS workout_plan CASCADE;
DROP TABLE IF EXISTS fav_recipes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);



CREATE TABLE workout_plan (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  exercise_id INTEGER NOT NULL,
  exercise_name VARCHAR(255) NOT NULL,
  exercise_bodypart VARCHAR(255) NOT NULL,
  exercise_url VARCHAR(255) NOT NULL,
  number_of_sets INTEGER,
  number_of_reps INTEGER,
  weight INTEGER
);

CREATE TABLE fav_recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipes_id VARCHAR(255) NOT NULL,
  recipe_label VARCHAR(255) NOT NULL,
  recipe_url VARCHAR(255) NOT NULL,
  recipe_dietLabels VARCHAR(255) NOT NULL,
  recipe_calories DECIMAL NOT NULL

);