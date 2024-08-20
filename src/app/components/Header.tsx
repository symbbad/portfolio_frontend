import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, width: '100%', textAlign: 'center', color: '#fff', transition: 'opacity 0.5s' }}>
      <h1>Website Name</h1>
    </div>
  );
};

export default Header;