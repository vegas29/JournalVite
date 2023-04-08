import React from 'react'
import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

import Web from '../../assets/img/web.svg'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3}}
        > 
            <Grid item xs={12} md={5}>
                <img
                    src={`${Web}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${Web}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={'Create an entry image'}
                    loading="lazy"
                    width={250}
                />
            </Grid>

            <Grid item xs={12} marginTop={5}>
                <Typography color="gray" variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}
