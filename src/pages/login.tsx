import { useState } from "react";
import { bsServer } from "../common/byteshare-server";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Stack, TextField, Tooltip, IconButton, Button } from "@mui/material";
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
        console.log(response)
        if(response.status== 200){
          
            localStorage.setItem("jwt",response.data.accessToken)
            const id = loggedInUserId()
            console.log(id)
            navigate(`/users`, {replace:true}) // takes current path and replaces from base url, otherwise we just keep adding
        }else{
            console.log(response.status)
            setError(response.data || 'Invalid credentials')
        }
    }
    async function handleSubmit(event) {
        event.preventDefault()
        postLogin()

    }
    return ( 
        <Card sx={{ p: 5, m: 5, width: "100%" }}>
          <Typography variant="h2" align="center">
            User Login
          </Typography>
          {error && <div className='error-message'>{error}</div>}
  
          <form autoComplete="off" onSubmit={e =>handleSubmit(e)}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "90%", my:1 }}
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
      <Button onClick={() => {navigate("/register")}} >Don't have an account? Register here.</Button>
        </Card> 
    );
}
