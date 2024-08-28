import { Box, Chip, Grid, Stack } from "@mui/material";

export default function TestTagBlock(){

    // TODO :  this array should be input from props or some backend call, hardcoding for now
    // this array of strings should be received from the backend findAllTagNamesByRecipe method.
    const tagArray: string[] = [ "dummyTagOne", "dummyTagThree","dummyTagTwo",]
    return(
        <Grid>
            <Stack direction={"row"}>
                {tagArray.map((tag)=>(
                    <Box sx={{ pr: 1 }}>
                        <Chip
                        key = {tag}
                        label = {tag}
                        variant = "filled"
                        color = "primary"
                        />
                    </Box>
                ))}
            </Stack>
        </Grid>
    );
}
