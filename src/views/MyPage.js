import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
// import AddWorkoutPlan from "../components/AddWorkoutPlan";
// import ExerciseList from "./ExerciseList";

const Mypage = () => {
  const [workoutPlan, setWorkoutPlan] = useState([]);

  const addExerciseToPlan = (exercise) => {
    setWorkoutPlan([...workoutPlan, exercise]);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise Name</TableCell>
              <TableCell>Sets</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell># Reps</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutPlan.map((exercise, index) => (
              <TableRow key={index}>
                <TableCell>{exercise.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <AddWorkoutPlan onAddToWorkoutPlan={addExerciseToPlan} />
      <ExerciseList addExerciseToPlan={addExerciseToPlan} /> */}
    </Box>
  );
};

export default Mypage;
