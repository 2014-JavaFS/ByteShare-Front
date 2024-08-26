import {
  Grid,
  Typography,
  Stack,
  TextField,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function NewTagForm({ props }) {
  const [tag, setTag] = useState("");

  const handleSubmitIngredient = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    console.log(JSON.stringify(tag));

    props.setTags([...props.tags, tag]);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1">Add Your Tags:</Typography>
      <form autoComplete="off" onSubmit={handleSubmitIngredient}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "40%" }}
        >
          <TextField
            label="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
            fullWidth
            color="secondary"
            variant="filled"
          />
          <Tooltip title={"Add Tag"} arrow>
            <IconButton type="submit" size="small">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
    </Grid>
  );
}
