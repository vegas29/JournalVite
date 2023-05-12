import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email: 'alejandroperdomo@gmail.com',
    password: '123456',
    displayName: 'Alejandro Perdomo'
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >=1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid, 
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <AuthLayout title='Register'>
            <form
                onSubmit={onSubmit}
            >
                <Grid container>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!displayNameValid}
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
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button 
                                variant='contained' 
                                fullWidth
                                type="submit"
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
