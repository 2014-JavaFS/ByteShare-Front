import { Typography, Card, Divider, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { bsServer } from "../common/byteshare-server";


export default function favorited({ props }){

    const [checking, setChecking] = useState(null);
    //TODO: Switch Out With Getting the Login Data
    const currentLoggedInUser=1;

    //Older Depreciated Testing Code
    /*
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
    */

    async function getFavorites(){
        bsServer.get('/favorite',
          {
            headers: { 
              'Accept': 'application/json',
              'userID': currentLoggedInUser.toString()
            }
          })
          .then((response) => {
            setChecking(response);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }

    async function removeFromFavorite(recipieId:number){
        bsServer.delete('/favorite',
        {
          headers: { 
            'Accept': 'application/json',
            'userID': currentLoggedInUser.toString(),
            'recipeID':recipieId.toString()
          }
        })
        .then((response) => {
          setChecking(response);
          //console.log(response.data);
        }, (error) => {
          console.log("You Have an Error"+"\n"+error);
        });
        location.reload();
    }

    async function goToRecipe(recipeID:number){
      //Try To Navigate To the Recipe Page?
    }

    window.onload = function(){
        //testing();
        getFavorites();
    }

    //useEffect(() => {
    //    testing();
    //  }, []);
    
    //
    if(!checking) return (<Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Page Error Handeling
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
            Page Either is Loading in, Failed to Load In, Or something caused an Error
        </Typography>
 
      </Card> );

  //Testing API Implementation In Return Statement
  /*
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
    */
   
   //Actual Return Statement
    return(
    <>
        {checking.data.map((data) =>
                        <Card sx={{ p: 5, m: 5, width: "100%" }}>
                          <Typography variant="h2" align="center">
                            {data.name}<Button onClick={() => removeFromFavorite(data.recipeId)}>Remove Favorite</Button>
                          </Typography>
                        <Typography>Author:{data.author}</Typography>
                        <Typography variant="body1" align="justify">
                          Recipe Description:
                          <br></br>
                          {data.content}
                        </Typography>
                        <br></br>
                        <Button onClick={() => goToRecipe(data.recipeId)}>Go To Full Page</Button>

                        </Card>
                        ) 
                    }
    </>
   );
}