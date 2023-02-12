import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre completo"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@dominio.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>
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
