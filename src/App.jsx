import React, { useState } from 'react';
import UserManagementPage from './components/User';
import MyProfile from './components/MyProfile';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('users');

  const handleNavigateToProfile = () => {
    // Navigate to My Profile page when Add button is clicked in modal
    setCurrentPage('profile');
  };

  const handleBackToUsers = () => {
    setCurrentPage('users');
  };

  return (
    <div className="App">
      {currentPage === 'users' ? (
        <UserManagementPage onNavigateToProfile={handleNavigateToProfile} />
      ) : (
        <MyProfile onBackToUsers={handleBackToUsers} />
      )}
    </div>
  );
}

export default App;
