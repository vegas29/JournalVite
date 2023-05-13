import { CircularProgress, Grid, Typography } from "@mui/material";

export const CheckingAuth = () => {
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
                direction='row'
                justifyContent='center'
            >
                <CircularProgress color="warning"/>
            </Grid>
        </Grid>        
    )
}
