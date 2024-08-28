import { Typography, Card, Divider,Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { bsServer } from "../common/byteshare-server";
import loggedInUserId from "../util/loggedInUserId";
import { useNavigate } from "react-router-dom";

export default function following({ props }){
    
    const [checking, setChecking] = useState(null);
    const [followers, setFollowers] = useState(0);
    //TODO: Switch Out With Getting the Login Data or user data
    const currentLogin:number = loggedInUserId();
    const navigate = useNavigate();

    

    //Depreciated Code
    /*
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
    */


    
    async function getFollowersAmsServer(){
        bsServer.get('/follow/following/user?userId='+currentLogin,
            {
                responseType:"json",
                headers: { 
                    'Accept': 'application/json'
                    
                  }

        }).then((response) => {
            setChecking(response);
            setFollowers(response.data.length);
            //setFollowers(response.data.length);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }
    
    //Depreciated Code
    /*
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
    */

    async function getFollowerCountAmsServer(){
        bsServer.get('/follow/following/user?userId='+currentLogin,
            {
                responseType:"json",
                headers: { 
                    'Accept': 'application/json'
                    
                  }

        }).then((response) => {
            //setChecking(response);
            setFollowers(response.data.length);
            //setFollowers(response.data.length);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
    }

    function moveToFollowers(){
        navigate(`/followers`, {replace:true})
        location.reload();

    }

    function removeFollowing(followID:number){
        bsServer.delete('/follow?followingId='+followID.toString(),
            {
                responseType:"json",
                headers: { 
                    'Accept': 'application/json',
                    'currentUserId':currentLogin,
                  },

        }).then((response) => {
            //setChecking(response);
            setFollowers(response.data.length);
            //setFollowers(response.data.length);
            //console.log(response.data);
          }, (error) => {
            console.log("You Have an Error"+"\n"+error);
          });
        location.reload();
    }

    
    window.onload = function(){
        //getFollowers();
        //getFollowerCount();
        getFollowersAmsServer();
        //getFollowerCountAmsServer();
    }

    //The Waiting For Load To Occur/Load Fails screen
    if(!checking) return (

    <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Followers Page
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
            Waiting For Things To Load In, Or User has No Followers
            <Button onClick={moveToFollowers}>View Your Followers</Button>

        </Typography>
 
    </Card> );

    //Should Return 2 Cards Card 1 Will be The Follower Count With a Button To Refresh the number
    //Card 2 Should be a list of all the Followers?
    return (
        <>
            <Card sx={{ p: 5, m: 5, width: "100%" }}>
                <Typography variant="h2" align="center">
                Total People You Are Following
                </Typography>
                <Typography variant="body1" align = "justify">
                    {followers}
                    <br></br>
                    <br></br>
                    <Button onClick={moveToFollowers}>View Your Followers</Button>
                </Typography>

            </Card> 

            <Card sx={{ p: 5, m: 5, width: "100%" }}>
                <Typography variant="h2" align="center">
                Following List
                </Typography>
                <Typography variant="body1" align = "justify">
                    {checking.data.map((data) =>
                        <Card sx={{ p: 5, m: 5, width: "100%" }}>
                        <Typography>{data.following.username}</Typography>
                        <Button onClick={()=>removeFollowing(data.following.userId)}>Remove From List</Button>
                        </Card>
                        ) 
                    }
                </Typography>

            </Card> 
        </>
    );
}