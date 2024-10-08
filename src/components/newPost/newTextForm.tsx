import {
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function NewTextForm({ setRecipeText }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleSubmitText = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    const recipe = {
      title: title,
      description: description,
    };

    console.log(JSON.stringify(recipe));
    setRecipeText(recipe);
    setUnsavedChanges(false);
  };

  const handleUpdateTitle = (event) => {
    setTitle(event.target.value);
    setUnsavedChanges(true);
  };

  const handleUpdateDescription = (event) => {
    setDescription(event.target.value);
    setUnsavedChanges(true);
  };

  return (
      <form autoComplete="off" onSubmit={handleSubmitText}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => handleUpdateTitle(e)}
          required
          color="secondary"
          sx={{ width: "60%", mb: 3 }}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => handleUpdateDescription(e)}
          required
          multiline
          rows={4}
          color="secondary"
          variant="filled"
          fullWidth
          sx={{ mb: 2 }}
        />
          <Button
            type="submit"
            color="secondary"
            size="large"
            variant="outlined"
          >
            Save Title and Description
          </Button>

          {unsavedChanges ? (
            <Alert severity="warning" variant="filled" sx={{ m: 1 }}>
              You have unsaved changes to your Title and/or Description!"
            </Alert>
          ) : (
            <></>
          )}
      </form>
  );
}
