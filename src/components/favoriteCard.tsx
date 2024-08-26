import { Typography, Card, Divider } from "@mui/material";


export default function favoritedCard(){


    return(
        <>
        <br>
        <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Recipe Lister Testing
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
            Waiting For Things To Load In
        </Typography>
 
      </Card> 
        </br>
        </>
    );
}