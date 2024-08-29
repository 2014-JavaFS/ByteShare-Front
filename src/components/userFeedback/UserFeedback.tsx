import { Card, Typography } from "@mui/material";

export default function UserFeedback({feedback}){

    return (
        <Card sx={{ p: 5, m: 5, width: "100%" }}>
          <Typography variant="h2" align="center">
            comment
          </Typography>
        </Card> );
}
