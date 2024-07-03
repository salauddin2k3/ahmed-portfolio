import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Projects" icon={<WorkIcon />} />
        <BottomNavigationAction label="Skills" icon={<BuildIcon />} />
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        {/* <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} /> */}
      </BottomNavigation>
    </Box>
  );
}
