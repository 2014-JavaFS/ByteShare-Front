import { Typography, Card, Divider } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function favorited({ props }){

    const testOne ="Checking";
    const testTwo ="What";
    const testThree="Each";
    const testFour="Does";
    const [checking, setChecking] = useState(null);

    async function testing(){
        axios.get('http://localhost:8080/users', {
            responseType:"json",
            headers: { 
                'Accept': 'application/json',
                'userType': 'ADMIN'
              }
            
          })
          .then((response) => {
            setChecking(response);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }   

    window.onload = function(){
        testing();
    }

    //useEffect(() => {
    //    testing();
    //  }, []);
    
    if(!checking) return (<Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Recipe Lister Testing
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
            Waiting For Things To Load In
        </Typography>
 
      </Card> );

    return (
        <>
        
    <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Recipe Lister Testing
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
          {testOne} {testTwo} {testThree} {testFour}
        </Typography>
        {checking.data.map((data) =>
         <Card sx={{ p: 5, m: 5, width: "100%" }}>
         <Typography>{data.username}</Typography></Card>
        ) }
      </Card> 
        <br></br>
        <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Checking How to do Multiple Cards
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
          {checking.data.length}

        </Typography> 
      </Card> 

      <br></br>
      <>
        {checking.data.map((data) =>
         <Card sx={{ p: 5, m: 5, width: "100%" }}>
         <Typography>{data.username}</Typography></Card>
        ) }
        </>
      </>
    );
}