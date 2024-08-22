import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function PostTextForm({ props }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitText = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    const recipe = {
      title: title,
      description: description,
    };

    console.log(JSON.stringify(recipe));
    props.setRecipeText(recipe);
  };

  return (
    <Grid item xs={12}>
      <form autoComplete="off" onSubmit={handleSubmitText}>
        <TextField
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
          color="secondary"
          sx={{ width: "60%", mb: 3 }}
          value={title}
        />
        <TextField
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={4}
          color="secondary"
          variant="filled"
          fullWidth
          sx={{ mb: 2 }}
          value={description}
        />
        <Button type="submit" color="secondary" size="large" variant="outlined">
          Save Title and Description
        </Button>
      </form>
    </Grid>
  );
}
