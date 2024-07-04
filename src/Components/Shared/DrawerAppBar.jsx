import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f50b5',
        },
        secondary: {
            main: '#1d2026',
            dark: '#ba000d',
            light: '#ff7961',
            contrastText: '#000',
        },
    },
});

const drawerWidth = 240;
const navItems = [
    { label: 'Home', link: '/#top' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const isActive = (item) => {
        // Check if the current location matches the item's link
        if (item.link === '/#top') {
            // Special case for the "Home" link
            return location.pathname === '/' && location.hash === '#top';
        } else {
            // For other links, check if the current location's hash matches the item's link
            return location.hash === item.link;
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <HashLink
                                smooth
                                to={item.link}
                                style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        color: isActive(item) ? 'yellow' : 'inherit',
                                        borderBottom: isActive(item) ? '2px solid yellow' : 'none',
                                    }}
                                />
                            </HashLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <Toolbar className="container mx-auto py-6">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <HashLink smooth to="/#top" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Ahmed
                            </HashLink>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <HashLink
                                    key={item.label}
                                    smooth
                                    to={item.link}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        marginRight: '16px',
                                    }}
                                >
                                    <Button
                                        sx={{
                                            color: isActive(item) ? '#f73378' : '#fff',
                                            borderBottom: isActive(item) ? '2px solid #f73378' : 'none',
                                            '&:hover': {
                                                color: '#f73378',
                                                borderBottom: '2px solid #f73378',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </HashLink>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    {/* Main content goes here */}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
