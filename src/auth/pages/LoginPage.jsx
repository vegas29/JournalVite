import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/';

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'alejandro@gmail.com',
        password: '123456789'
    });

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log({email, password});
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@dominio.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button 
                                type='submit' 
                                variant='contained' 
                                fullWidth
                                disabled={ isAuthenticating }
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent='center'>
                        <Typography>Or</Typography>
                    </Grid>


                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button 
                                variant='outlined' 
                                fullWidth
                                onClick={onGoogleSignIn}
                                disabled={ isAuthenticating }
                            >
                                <Google/>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction='row'
                        justifyContent='end'
                    >
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
