import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({title = '', children}) => {
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
                className="box-shadow"
                xs={ 3 }
                // md={ 6 }
                sx={{backgroundColor: 'white.main', padding: 3, borderRadius: 2, width: {sm: 450}}}
            >
                <Typography variant='h5' sx={{mb: 1}} fontSize={50} fontWeight={'bold'}>{title}</Typography>
                <Typography sx={{mb: 1}} fontSize={18} fontWeight={'light'}>Accede a notes app</Typography>
                { children }
            </Grid>
        </Grid>        
    )
}
