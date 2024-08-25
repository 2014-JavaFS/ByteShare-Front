import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bsServer } from "../common/byteshare-server";
import { HttpStatusCode } from "axios";
import { Card, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function RegisterForm(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[username, setUsername] = useState("")
    const[userType, setUserType] = useState("")
    const[error, setError] = useState("")
    const navigate = useNavigate()

    async function postData() {
        try {
          const response = await bsServer.post("auth/register",{
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            username: username,
            userType: userType
          })
          if(response.status==HttpStatusCode.Ok){
            console.log(response.data.userId)
            navigate('/login')
          }else{
            setError(response.data || 'Registration error, try again with different data')
          }
         
        } catch (error:any) {
          console.log(error)
        }
      }
    async function handleSubmit() {
        postData();
    }
    return ( 
        <Card sx={{ p: 5, m: 5, width: "100%" }}>
          <Typography variant="h2" align="center">
            User Registration
          </Typography>
          {error && <div className='error-message'>{error}</div>}
  
          <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "90%" }}
        >
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            variant="filled"
            color="secondary"
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <TextField
            label="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <TextField
            label="User Type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <Tooltip title={"Register"} arrow>
            <IconButton type="submit" size="small">
              <AppRegistrationIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
        </Card> 
    );
}