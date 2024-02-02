import { Fragment } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { TaskFormProps } from "../../types/TaskFormProps";

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    onAddTask(data);
  };

  return (
    <Fragment>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            {...register("title", { required: true })}
            fullWidth
            margin="normal"
          />
          {errors.title && (
            <Typography color="error">Title is required.</Typography>
          )}
          <TextField
            id="completed"
            label="Completed"
            variant="outlined"
            {...register("completed", { required: true })}
            fullWidth
            margin="normal"
          />
          {errors.completed && (
            <Typography color="error">Completed is required.</Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
    </Fragment>
  );
};

export default TaskForm;
