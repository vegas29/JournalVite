import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import Draw from '../../assets/images/draw.png'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)'}}
        > 
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* <StarOutline sx={{fontSize: 100, color: 'gray'}}/> */}
                <img
                    src={Draw}
                    srcSet={Draw}
                    alt="Añadir nota"
                    loading="lazy"
                    width="30%"
                    heigh="30%"
                />
            </Grid>

            <Grid item xs={12} sx={{marginTop: 5}}>
                <Typography color="gray" variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}
