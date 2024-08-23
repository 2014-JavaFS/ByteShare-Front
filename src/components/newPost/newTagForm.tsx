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
{/**  //#region Adding Tags
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  // TODO: Probably need to make this into a grid but the idea of the tags is working now but just with a list
  const handleTagSubmit = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();
    setTags([...tags, tag]);
   
    const newList = list.concat({tag});

    setList(newList);
    console.log(newList);
    setTag("");
  };
  const [list, setList] = React.useState([]);

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.tag}</li>
      ))}
    </ul>
  );

  const tagAdding = (
    <Grid item xs={12}>
      <Typography variant="subtitle1">Add Your Tags:</Typography>
      <form autoComplete="off" onSubmit={handleTagSubmit}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "30%" }}
        >
          <TextField
            id="Tag_Name"
            label="Tag Name"
            variant="filled"
            value = {tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <Tooltip title={"Add Tag"} arrow>
            <IconButton
              type="submit"
              size="small"
              sx={{ mx: 2, backgroundColor: "#00000022" }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        {/**this is the secondary stack that will contain all of the made tags }
        <div>
      <List list={list} />
        </div>
      </form>
    </Grid>
  );
  */}
  //#endregion 
