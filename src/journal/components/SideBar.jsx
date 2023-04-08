import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBar = ({drawerWidth = 240}) => {
    return (
        <Box
            component='nav'
            sx={{width: {sm: drawerWidth}, flexShrink: { sm: 0}}}
        >

            <Drawer
                variant="permanent" //temporary
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar sx={{backgroundColor: 'primary.main'}}>

                    <Typography variant="h6" noWrap component="div" color="white.main">
                        Alejandro Perdomo
                    </Typography>

                </Toolbar>

                <Divider/>

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Cillum consectetur ea labore nostrud voluptate eu cillum cupidatat aliquip cillum ullamco nulla.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    )
}
