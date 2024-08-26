import { Card, Divider, Typography, Grid } from "@mui/material";

export default function UserProfile() {

    return (
        <Card sx={{ p: 5, ms: 5, width: "100%" }}>
            <Typography variant="h3" align="center">Your User Profile: </Typography>
            <Divider sx={{ m: 3 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">User Id: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Email: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Password: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Username: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">First Name: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Last Name: </Typography>
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">User Type: </Typography>
            </Grid>
        </Card>
    );
}