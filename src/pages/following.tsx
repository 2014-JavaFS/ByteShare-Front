import { Typography, Card, Divider,Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { amsServer } from "../common/byteshare-server";

export default function following({ props }){
    
    const [checking, setChecking] = useState(null);
    const [followers, setFollowers] = useState(0);
    const currentLogin:number = 8;
    //Get Followers from params
    //localhost:8080/follow/following/user?userId=8

    async function getFollowers(){
        axios.get('http://localhost:8080/follow/following/user?userId='+currentLogin, {
            responseType:"json",
            headers: { 
                'Accept': 'application/json'
                //,'currentUserId': currentLogin.toString()
              }
            
          })
          .then((response) => {
            //console.log(response.data);
            setChecking(response);
            setFollowers(response.data.length);

            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }  

    async function getFollowersAmsServer(){
        amsServer.get('/follow/following/user?userId='+currentLogin,
            {

        }).then((response) => {
            setChecking(response);
            //setFollowers(response.data.length);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }
    
    async function getFollowerCount(){
        axios.get('http://localhost:8080/follow/following/user?userId='+currentLogin, {
            responseType:"json",
            headers: { 
                'Accept': 'application/json',
                'currentUserId': currentLogin.toString()
              }
            
          })
          .then((response) => {
            setFollowers(response.data.length);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }

    async function getFollowerCountAmsServer(){

    }

    
    window.onload = function(){
        getFollowers();
        //getFollowerCount();
        //getFollowersAmsServer();
        //getFollowerCountAmsServer();
    }

    //The Waiting For Load To Occur/Load Fails screen
    if(!checking) return (

    <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Followers
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
            Waiting For Things To Load In
        </Typography>
 
    </Card> );

    //Should Return 2 Cards Card 1 Will be The Follower Count With a Button To Refresh the number
    //Card 2 Should be a list of all the Followers?
    return (
        <>
            <Card sx={{ p: 5, m: 5, width: "100%" }}>
                <Typography variant="h2" align="center">
                Followers
                </Typography>
                <Typography variant="body1" align = "justify">
                    <Button onClick={getFollowerCount}>Update Followers</Button>
                    <br></br>
                    <br></br>

                    {followers}
                </Typography>

            </Card> 

            <Card sx={{ p: 5, m: 5, width: "100%" }}>
                <Typography variant="h2" align="center">
                Follower List
                </Typography>
                <Typography variant="body1" align = "justify">
                    {checking.data.map((data) =>
                        <Card sx={{ p: 5, m: 5, width: "100%" }}>
                        <Typography>{data.follower.username}</Typography></Card>
                        ) 
                    }
                </Typography>

            </Card> 
        </>
    );
}