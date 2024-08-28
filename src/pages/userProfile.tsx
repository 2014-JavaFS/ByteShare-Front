import { Card, Divider, Typography, Grid, Button, Stack, TextField, TextareaAutosize, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { bsServer } from "../common/byteshare-server";
import { useNavigate } from "react-router-dom";
import User from "../common/user";
import loggedInUserId from "../util/loggedInUserId";

export default function UserProfile() {

    const [user, setUser] = useState<User>({
        email: "",
        password: "",
        username: "",
        first_name: "",
        last_name: "",
    })

    const imageURL = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.username}`

    const navigate = useNavigate()
    const [error, setError] = useState("")

    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(
       () => {
        async function getUserProfile() {
            try {
                const response = await bsServer.get(`users/${loggedInUserId()}`)
    
                if (response.status==200) {
                    // navigate(`/${loggedInUserId()}`)
                    setUser(response.data)
                } else {
                    setError(response.data || 'Not able to get user data')
                }
            } catch (error:any) {
                console.log(error)
            }
        }
        getUserProfile()
       },[] // when the page first loads
    )

    function buttonUpdate() {
        setIsUpdate(!isUpdate)
    }

    

    async function putUserProfile() {
        try {
            const response = await bsServer.put("users", user)
            if (response.status==200) {
                setIsUpdate(!isUpdate)
            } else {
                setError(response.data || 'Not able to get user data')
            }
        } catch (error:any) {
            console.log(error)
        }
    }

    async function handleUpdate(event) {
        event.preventDefault()
        putUserProfile();
    }

    return (
        <Card sx={{ p: 5, ms: 5, width: "100%" }}>
            <Typography variant="h3" align="center">Your User Profile: </Typography>
            <CardMedia
                sx={{ height: 140 }}
                image={imageURL}
                title="User Picture"
            />
            <Divider sx={{ m: 3 }} />
            {error && <div className='error-message'>{error}</div>}
            
            {/* <Grid container spacing={1}>
            <Typography variant="h5" align="left">User Id: </Typography>
                <TextField 
                    id="outlined-read-only-input"
                    label="User Id"
                    defaultValue={"1"}
                    InputProps={{readOnly: true}}
                    value={userId}
                />
            </Grid> */}

            

            <Grid container spacing={1}>
                <Typography variant="h5" align="left">Email: </Typography>
                {isUpdate ? <TextField 
                    required
                    id="outlined-required"
                    label="Email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                /> : <span>{user.email}</span>}
            </Grid>

            <Divider sx={{ m: 1 }} />

            {isUpdate ? <Grid container spacing={1}>
                <Typography variant="h5" align="left">Password: </Typography>
                 <TextField 
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                /> 
            </Grid> : <span></span>}

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="left">Username: </Typography>
                {isUpdate ? <TextField 
                    required
                    id="outlined-required"
                    label="Username"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                /> : <span>{user.username}</span>}
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="left">First Name: </Typography>
                {isUpdate ? <TextField 
                    required
                    id="outlined-required"
                    label="First Name"
                    value={user.first_name}
                    onChange={(e) => setUser({...user, first_name: e.target.value})}
                /> : <span>{user.first_name}</span>}
            </Grid>

            <Divider sx={{ m: 1 }} />

            <Grid container spacing={1}>
                <Typography variant="h5" align="left">Last Name: </Typography>
                {isUpdate ? <TextField 
                    required
                    id="outlined-required"
                    label="Last Name"
                    value={user.last_name}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                /> : <span>{user.last_name}</span>}
            </Grid>

            <Divider sx={{ m: 1 }} />

            {/* <Grid container spacing={1}>
                <Typography variant="h5" align="left">User Type: </Typography>
                {isUpdate ? <TextField 
                    id="outlined-read-only-input"
                    InputProps={{readOnly: true}}
                    value={user.userType}
                /> : <span>{user.userType}</span>}
            </Grid> */}

            <br />

            <Stack spacing={2} direction="row">
                <Button variant="outlined" href="/">Close</Button>
                {isUpdate 
                ? <Button variant="outlined" onClick={() => handleUpdate(event)}>Submit</Button> 
                : <Button variant="outlined" onClick={buttonUpdate}>Update</Button>}
            </Stack>
        </Card>
    );
}