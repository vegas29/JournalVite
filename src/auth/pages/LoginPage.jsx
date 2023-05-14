import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/';

const formData = {
    email: '',
    password: '',
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { 
        formState, email, password, onInputChange,
        isFormValid, emailValid, passwordValid, 
    } = useForm( formData, formValidations );

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(!formSubmitted);
        dispatch(startLoginWithEmailAndPassword(formState));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='Login'>
            <form 
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container>

                    <Grid 
                        item 
                        xs={12}
                        sx={{marginTop: 2}}
                        display={ !!errorMessage ? '' : 'none' }
                    >
                        <Alert severity='error'>
                            {errorMessage}
                        </Alert>
                    </Grid>
                    
                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@dominio.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
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
