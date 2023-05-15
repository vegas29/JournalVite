import { Grid, Typography } from '@mui/material';
import notFoundImage from '../../assets/images/empty.svg';

export const Empty = () => {
    return (
        <Grid 
            container
            item 
            direction="column"
            justifyContent="center"
            alignItems="center"
        >   
            <Typography fontSize={20} fontWeight={'bold'} mb={5}>Not images</Typography>
            <img
                src={`${notFoundImage}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${notFoundImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={'Not image found'}
                loading="lazy"
                width={300}
            />
        </Grid>
    )
}
