
-- INSERT INTO users (name, email, password) 
-- VALUES 
--   ('John Doe', 'john@example.com', '000'),
--   ('Alice Smith', 'alice@example.com', '111'),
--   ('Bob Johnson', 'bob@example.com', '222');

  INSERT INTO workout_plan (owner_id, exercise_id, exercise_name, exercise_bodypart, exercise_url, number_of_sets, number_of_reps, weight) VALUES
  (1, 1, 'Push-ups', 'Chest', 'https://example.com/pushups', 3, 15, 0),
  (3, 2, 'Pull-ups', 'Back', 'https://example.com/pullups', 3, 10, 0),
  (2, 3, 'Squats', 'Legs', 'https://example.com/squats', 4, 12, 50);



  INSERT INTO fav_recipes (owner_id, recipes_id, recipe_label, recipe_url, recipe_dietLabels, recipe_calories) VALUES
  (1, 1, 'Grilled Chicken Salad', 'https://example.com/grilledchickensalad',  'Low Carb', 1000),
  (3, 2, 'Vegetable Stir Fry', 'https://example.com/vegetablestirfry',  'Vegetarian', 1001),
  (2, 3, 'Quinoa Salad', 'https://example.com/quinoasalad', 'Vegan', 1002);
 


