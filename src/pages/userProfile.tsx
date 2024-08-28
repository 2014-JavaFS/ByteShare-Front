import { Card, Divider, Typography, Grid, Button, Stack, TextField } from "@mui/material";

export default function UserProfile() {

    return (
        <Card sx={{ p: 5, ms: 5, width: "100%" }}>
            <Typography variant="h3" align="center">Your User Profile: </Typography>
            <Divider sx={{ m: 3 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">User Id: </Typography>
                <TextField 
                    id="outlined-read-only-input"
                    defaultValue={"1"}
                    InputProps={{readOnly: true}}
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Email: </Typography>
                <TextField 
                    required
                    id="outlined-required"
                    label="Email"
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Password: </Typography>
                <TextField 
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Username: </Typography>
                <TextField 
                    required
                    id="outlined-required"
                    label="Username"
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">First Name: </Typography>
                <TextField 
                    required
                    id="outlined-required"
                    label="First Name"
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">Last Name: </Typography>
                <TextField 
                    required
                    id="outlined-required"
                    label="Last Name"
                />
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="center">User Type: </Typography>
                <TextField 
                    id="outlined-read-only-input"
                    label="UserType"
                    InputProps={{readOnly: true}}
                />
            </Grid>

            <br />

            <Stack spacing={2} direction="row">
                <Button variant="outlined" href="/">Close</Button>
                <Button variant="outlined" href="/profile" onClick={() => {alert('Your information has been updated')}}>Update</Button>
            </Stack>
        </Card>
    );
}