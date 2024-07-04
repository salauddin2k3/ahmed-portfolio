import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { NavLink } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navItems = [
    { label: 'Home', icon: <HomeIcon />, to: '/' },
    { label: 'Skills', icon: <BuildIcon />, to: '/skills' },
    { label: 'Projects', icon: <WorkIcon />, to: '/projects' },
    { label: 'Contact', icon: <ContactMailIcon />, to: '/contact' },
  ];

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: '1300' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          '& .Mui-selected': {
            color: '#f73378',
            '& .MuiBottomNavigationAction-label': {
              color: '#f73378',
            },
            '& .MuiSvgIcon-root': {
              color: '#f73378',
            },
          },
          '& .MuiBottomNavigationAction-label': {
            color: '#686464',
          },
          '& .MuiSvgIcon-root': {
            color: '#686464',
          },
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            component={NavLink}
            to={item.to}
            sx={{ color: value === index ? '#f73378' : '#686464' }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
