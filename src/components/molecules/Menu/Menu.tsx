import React from 'react';
import {Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <Box component="nav" sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        MUI
      </Typography>
      <Divider />
      <List>
        {[{name: 'Home', url: '/'}, {name: 'Fetching', url: '/fetching'}, {
          name: 'Hooks',
          url: '/hooks'
        }].map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.url}>
              <ListItemButton sx={{textAlign: 'center'}}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
};
export default Menu;
