import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);


    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);
    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid, 
    } = useForm( formData, formValidations );

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(!formSubmitted);

        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailAndPassword(formState));
    }

    return (
        <AuthLayout title='Register'>
            <form
                onSubmit={onSubmit}
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
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@dominio.com"
                            fullWidth
                            name="email"
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
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button 
                                variant='contained' 
                                fullWidth
                                type="submit"
                                disabled={isCheckingAuthentication}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction='row'
                        justifyContent='end'
                    >
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            ¿Ya tienes una cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
