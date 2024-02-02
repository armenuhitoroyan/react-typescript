import { Button, Container, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { DrawingItemFormProps } from "../../types/DrawingItemFormProps";

const DrawingItemForm = ({onAddItem}: DrawingItemFormProps) => {
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data: any) => { 
        console.log(data);  
        onAddItem(data);
    }

  return (
    <Fragment>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="shapeName"
            label="Shape Name"
            variant="outlined"
            {...register("shapeName", {required: true})}
            fullWidth
            margin="normal"
          />
          {errors.shapeName && (
            <Typography color="error">Item's name is required</Typography>
          )}
          <Button
            type="submit" 
            variant="contained"
            color="primary"
            fullWidth
            style={{marginBottom: "15px"}}
          >
            Add Item
          </Button>
        </form>
      </Container>
    </Fragment>
  );
};

export default DrawingItemForm;
