import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    PetCommerce
                </Typography>
                <Button color="inherit">Cachorros</Button>
                <Button color="inherit">Gatos</Button>
                <Button color="inherit">Outros Pets</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
