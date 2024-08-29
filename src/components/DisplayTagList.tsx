import { Box, Chip, Grid, Stack } from "@mui/material";
import { bsServer } from "../common/byteshare-server";
import { useEffect, useState } from "react";

export default function DisplayTagList({ recipeId }) {
  const [tagNames, setTagNames] = useState([]);

  useEffect(() => {
    async function getTagNameArray() {
      const int: string = recipeId;

      try {
        const axResp = await bsServer.get("/tags/findTagNames/" + int); 

        if (axResp.status > 199 && axResp.status < 300) {
          setTagNames(axResp.data);
        } else {
          //do something bad
        }
      } catch (error) {
        console.error(error); 
      }
    }
    getTagNameArray();
  }, []);

  return (
    <Grid>
      <Stack direction={"row"}>
        {tagNames.map((tag) => (
          <Box sx={{ pr: 1 }} key={tag}>
            <Chip label={tag} variant="filled" color="primary" />
          </Box>
        ))}
      </Stack>
    </Grid>
  );
}
