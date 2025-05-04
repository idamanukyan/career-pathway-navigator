// src/components/Header/Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link as RouterLink } from 'react-router-dom';
import { headerStyles } from './header.styles';

export const Header: React.FC = () => {
    const classes = headerStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => setDrawerOpen(open => !open);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Courses', to: '/courses' },
        { label: 'Success Stories', to: '/success' },
        { label: 'Partnerships', to: '/partners' },
    ];

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} elevation={1}>
                <Toolbar className={classes.toolbar}>
                    {/* Mobile Menu Button */}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        onClick={toggleDrawer}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        className={classes.logo}
                    >
                        GrowthGrid<span className={classes.accent}>.ai</span>
                    </Typography>

                    {/* Desktop Nav */}
                    <div className={classes.navLinks}>
                        {navItems.map(item => (
                            <Button
                                key={item.to}
                                component={RouterLink}
                                to={item.to}
                                className={classes.navButton}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className={classes.ctaButtons}>
                        <Button
                            component={RouterLink}
                            to="/login"
                            className={classes.loginButton}
                        >
                            Log In
                        </Button>
                        <Button
                            component={RouterLink}
                            to="/signup"
                            variant="contained"
                            color="primary"
                        >
                            Get Started
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                classes={{ paper: classes.drawerPaper }}
            >
                <List>
                    {navItems.map(item => (
                        <ListItem
                            key={item.to}
                            button
                            component={RouterLink}
                            to={item.to}
                            onClick={toggleDrawer}
                        >
                            {item.label}
                        </ListItem>
                    ))}
                    <ListItem
                        button
                        component={RouterLink}
                        to="/login"
                        onClick={toggleDrawer}
                    >
                        Log In
                    </ListItem>
                    <ListItem
                        button
                        component={RouterLink}
                        to="/signup"
                        onClick={toggleDrawer}
                        className={classes.signupDrawerItem}
                    >
                        Get Started
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
