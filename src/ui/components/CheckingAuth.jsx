import { CircularProgress, Grid, Typography } from "@mui/material";
import { useLottie }  from "lottie-react";
import nyanLoader from './../../assets/loaders/nyan-cat.json'

export const CheckingAuth = () => {

    const options = {
        animationData: nyanLoader,
        loop: true,
        style: {
            height: 200
        }
    };

      
     const { View } = useLottie(options);

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4}}
        >
            <Grid 
                item
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
            >
                {/* <CircularProgress color="warning"/> */}
                {View}
                <Typography style={{color: 'white', fontSize: 20, fontStyle: "oblique"}}>Loading...</Typography>
            </Grid>
        </Grid>        
    )
}
