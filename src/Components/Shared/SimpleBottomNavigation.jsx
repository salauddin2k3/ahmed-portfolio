import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { HashLink as NavLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: <HomeIcon />, to: '/#top' },
  { label: 'Skills', icon: <BuildIcon />, to: '#skills' },
  { label: 'Projects', icon: <WorkIcon />, to: '#projects' },
  { label: 'Contact', icon: <ContactMailIcon />, to: '#contact' },
];

export default function SimpleBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const foundIndex = navItems.findIndex((item) => item.to === location.pathname);
    if (foundIndex !== -1) {
      setValue(foundIndex);
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            smooth
            sx={{
              color: value === index ? '#f73378' : '#686464',
              '&.Mui-selected': {
                color: '#f73378',
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
