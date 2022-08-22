import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
import Hooks from './pages/hooks/Hooks';
import Fetching from './pages/fetching/Fetching';
import {Avatar, Menu, MenuItem} from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu open={true}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/hooks">Hooks</Link>
        </MenuItem>
      <MenuItem>
        <Link to="/fetching">Fetching</Link>
        </MenuItem>
      </Menu>
      <Box component="nav">
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
      </Box>
      <Routes>
        <Route path={''} element={<App />} />
        <Route path={'/hooks'} element={<Hooks />} />
        <Route path={'/fetching'} element={<Fetching />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
