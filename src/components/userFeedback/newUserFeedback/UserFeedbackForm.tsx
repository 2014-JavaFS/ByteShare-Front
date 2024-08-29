import { Button, Card, Divider, Paper, Rating, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { bsServer as bsServer } from "../../../common/byteshare-server";

function UserFeedbackForm({setFeedback}){
    const handlePostFeedback = (event) => {
        event.preventDefault();

        const feedback = {
            overallScore: overallScoreValue,
            comment: comment,
        };

        console.log(JSON.stringify(feedback));
        bsServer.post("/feedback", feedback)
    }

    const labels: {[index: string]: string} = {
        1: "Very Bad", 
        2: "Bad",
        3: "Okay",
        4: "Good", 
        5: "Very Good"
    };

    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const [overallScoreValue, setOverallScoreValue] = useState(0);
    const [overallScoreHoverValue, setOverallScoreHoverValue] = useState(-1);
    const [comment, setComment] = useState("");

    return(
        <Card sx={{ p: 5, mx: 5 }}>
            <Typography variant="h3" align="center">
            Create Your Feedback:
            </Typography>
            <Divider sx={{ m: 3 }} />
            <Rating
                name="overall-score"
                value={overallScoreValue}
                onChange={(event, newValue) => {
                    setOverallScoreValue(newValue)
                }}
                onChangeActive={(event, newHover) => {
                    setOverallScoreHoverValue(newHover)
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
            {overallScoreValue !== null && (
                <Box sx={{ ml: 2 }}>{labels[overallScoreHoverValue !== -1 ? overallScoreHoverValue : overallScoreValue]}
                </Box>
            )}
            <Divider sx={{ m: 3 }} />
            <TextField
                id="userFeedbackText"
                helperText="Please enter your feedback here."
                label="Feedback"
                value={comment}
                multiline
                maxRows={6}
                variant="standard"
                fullWidth
                onChange={(event) => setComment(event.target.value)}
                >
            </TextField>
            <Stack spacing={1}>
            <Button
                color="secondary"
                size="large"
                variant="outlined"
                onClick={handlePostFeedback}
            >Review/Comment
            </Button>
            </Stack>
        </Card>
    )
}

export default UserFeedbackForm;
