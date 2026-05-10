import { Button, Grid } from "@mui/material";
import React from "react";

export const Navbar: React.FC = () => {
    return (
        <Grid container spacing={2} sx={{ padding: 2, backgroundColor: '#1976d2', color: 'white' }}>
            <Grid >
                <Button href="#home" variant="text" color="inherit">
                    Home
                </Button>
            </Grid>
            <Grid >
                <Button href="#about" variant="text" color="inherit">
                    About
                </Button>
            </Grid>
            <Grid >
                <Button href="#skills" variant="text" color="inherit">
                    Skills
                </Button>
            </Grid>
            <Grid >
                <Button href="#projects" variant="text" color="inherit">
                    Projects
                </Button>
            </Grid>
            <Grid>
                <Button href="#contact" variant="text" color="inherit">
                    Contact
                </Button>
            </Grid>
        </Grid>
    );
}