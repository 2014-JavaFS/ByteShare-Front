import { Grid, Stack, Chip, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function NewTagList({ props }) {
  function handleDeleteTag(tagToDelete) {
    props.setTags(props.tags.filter((t) => t !== tagToDelete));
  }

  if (props.tags.length < 1) {
    return;
  }

  return (
    <Grid item xs={12}>
      <Stack direction="row">
        {props.tags.map((t) => (
          <Box sx={{ pr: 1 }}>
            <Chip
              key={t}
              label={t}
              onDelete={() => handleDeleteTag(t)}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
              color="secondary"
            />
          </Box>
        ))}
      </Stack>
    </Grid>
  );
}
