const { Pool } = require("pg");

/// Connecting to PostgreSQL

const pool = new Pool({
  database: "ultimatefit",
  password: "labber",
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  const query = `
    SELECT *
    FROM users
    WHERE email = $1;
  `;

  return pool
    .query(query, [email])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  const query = `
    SELECT *
    FROM users
    WHERE id = $1;
  `;

  return pool
    .query(query, [id])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [user.name, user.email, user.password];

  return pool
    .query(query, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get a single recipe from the database given its id.
 * @param {number} id The id of the recipe.
 * @return {Promise<{}>} A promise to the recipe.
 */
const getRecipeWithId = function (id) {
  const query = `
    SELECT *
    FROM recipes
    WHERE id = $1;
  `;
  return pool
    .query(query, [id])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get recipes from the database given a label.
 * @param {string} label The label of the recipe.
 * @return {Promise<{}[]>} A promise to the recipes.
 */
const getRecipesWithLabel = function (label) {
  const query = `
    SELECT *
    FROM recipes
    WHERE label = $1;
  `;
  return pool
    .query(query, [label])
    .then((result) => {
      return result.rows || [];
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get a single exercise from the database given its id.
 * @param {number} id The id of the exercise.
 * @return {Promise<{}>} A promise to the exercise.
 */
const getExerciseWithId = function (id) {
  const query = `
    SELECT *
    FROM exercises
    WHERE id = $1;
  `;
  return pool
    .query(query, [id])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get exercises from the database given a title.
 * @param {string} title The title of the exercise.
 * @return {Promise<{}[]>} A promise to the exercises.
 */
const getExercisesWithTitle = function (title) {
  const query = `
    SELECT *
    FROM exercises
    WHERE title = $1;
  `;
  return pool
    .query(query, [title])
    .then((result) => {
      return result.rows || [];
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get a single workout plan from the database given its id.
 * @param {number} id The id of the workout plan.
 * @return {Promise<{}>} A promise to the workout plan.
 */
const getWorkoutPlanWithId = function (id) {
  const query = `
    SELECT *
    FROM workout_plan
    WHERE id = $1;
  `;
  return pool
    .query(query, [id])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Get favorite recipes from the database given a user id.
 * @param {number} userId The id of the user.
 * @return {Promise<{}[]>} A promise to the favorite recipes.
 */
const getFavRecipesWithId = function (userId) {
  const query = `
    SELECT r.*
    FROM fav_recipes fr
    JOIN recipes r ON fr.recipes_id = r.id
    WHERE fr.owner_id = $1;
  `;
  return pool
    .query(query, [userId])
    .then((result) => {
      return result.rows || [];
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Add an exercise to the user's workout plan.
 * @param {number} userId The id of the user.
 * @param {number} exerciseId The id of the exercise to add.
 * @return {Promise<{}>} A promise to the added exercise.
 */
const addToWorkoutPlan = function (userId, exerciseId) {
  const query = `
    INSERT INTO workout_plan (owner_id, exercise_id)
    VALUES ($1, $2)
    RETURNING *;
  `;
  return pool
    .query(query, [userId, exerciseId])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

/**
 * Add a recipe to the user's favorite recipes.
 * @param {number} userId The id of the user.
 * @param {number} recipeId The id of the recipe to add.
 * @return {Promise<{}>} A promise to the added recipe.
 */
const addToFavoriteRecipes = function (userId, recipeId) {
  const query = `
    INSERT INTO fav_recipes (owner_id, recipes_id)
    VALUES ($1, $2)
    RETURNING *;
  `;
  return pool
    .query(query, [userId, recipeId])
    .then((result) => {
      return result.rows[0] || null;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  pool,
  getRecipeWithId,
  getRecipesWithLabel,
  getExerciseWithId,
  getExercisesWithTitle,
  getWorkoutPlanWithId,
  getFavRecipesWithId,
  addToWorkoutPlan,
  addToFavoriteRecipes,
};
