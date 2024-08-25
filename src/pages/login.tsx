import { useState } from "react";
import { bsServer } from "../common/byteshare-server";
import { HttpStatusCode } from "axios";
import useLS from "../hooks/useLS";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Stack, TextField, Tooltip, IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import loggedInUserId from "../util/loggedInUserId";

export default function LoginForm(){
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    async function postLogin() {
        const response = await bsServer.post("auth/login",{
            email: email,
            password: password
        })
        if(response.status== HttpStatusCode.Ok){
        
            useLS("jwt",response.data.accessToken)
            const id = loggedInUserId()
            console.log(id)
            navigate("/")
        }else{
            console.log(response.status)
            setError(response.data || 'Invalid credentials')
        }
    }
    async function handleSubmit() {
        postLogin()

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
          
          <Tooltip title={"Login"} arrow>
            <IconButton type="submit" size="small">
              <LoginIcon></LoginIcon>
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
        </Card> 
    );
}