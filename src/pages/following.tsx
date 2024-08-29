import {
  Typography,
  Card,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { bsServer } from "../common/byteshare-server";
import loggedInUserId from "../util/loggedInUserId";

export default function Following() {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [viewingFollowing, setViewingFollowing] = useState(false);
  const [, setError] = useState("");

  useEffect(
    () => {
      async function getFollowing() {
        try {
          const response = await bsServer.get(
            `follow/following/user?userId=${loggedInUserId()}`
          );
          if (response.status == 200) {
            setFollowing(response.data);
          } else {
            setError(response.data || "Not able to get follow data");
          }
        } catch (error) {
          console.log(error);
        }
      }
      getFollowing();
    },
    [] // when the page first loads
  );

  useEffect(
    () => {
      async function getFollowers() {
        try {
          const response = await bsServer.get(
            `follow/followers/user?userId=${loggedInUserId()}`
          );
          if (response.status == 200) {
            setFollowers(response.data);
          } else {
            setError(response.data || "Not able to get follow data");
          }
        } catch (error) {
          console.log(error);
        }
      }
      getFollowers();
    },
    [] // when the page first loads
  );

  //TODO: figure out why this doesnt update the page
  async function handleUnfollow(followingId) {
    try {
      await bsServer.delete(`follow?followingId=${followingId}`, {
        headers: { currentUserId: loggedInUserId() },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card sx={{ p: 2, mx: 5, width: "80vw" }}>
        <Stack>
          <Typography variant="h2" align="center">
            {viewingFollowing ? "Following" : "Followers"}
          </Typography>

          <Typography variant="subtitle1" align="center">
            {viewingFollowing
              ? `You are following ${followers.length} users`
              : `You have ${followers.length} followers`}
          </Typography>

          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setViewingFollowing(!viewingFollowing)}
            sx={{ mr: 3, alignSelf: "center" }}
          >
            {viewingFollowing
              ? `View your followers`
              : `View who you're following`}
          </Button>
        </Stack>
      </Card>

      {viewingFollowing ? (
        <Stack sx={{ m: 5, my: 3 }} spacing={2}>
          {following.map((following) => (
            <Card key={following.follow_id} sx={{ p: 2, width: "80vw" }}>
              <Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => handleUnfollow(following.following.userId)}
                  sx={{ mr: 3 }}
                >
                  Unfollow
                </Button>
                {following.following.username}
              </Typography>
            </Card>
          ))}
        </Stack>
      ) : (
        <Stack sx={{ m: 5, my: 3 }} spacing={2}>
          {followers.map((follower) => (
            <Card key={follower.follow_id} sx={{ p: 2, width: "80vw" }}>
              <Typography>{follower.follower.username}</Typography>
            </Card>
          ))}
        </Stack>
      )}
    </>
  );
}
