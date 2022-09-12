import {Link} from 'react-router-dom';
import React from 'react';


const Navigation = () => (
  <nav>
    <Link to="/">Home</Link> |{' '}
    <Link to="/react-18-hooks">React 18 Hooks</Link>
  </nav>
)
export default Navigation;
