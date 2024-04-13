import React from 'react';
import Logout from '../Logout/App'

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Student Records</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Student</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
