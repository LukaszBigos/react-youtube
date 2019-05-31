import React from 'react';

import '../SearchBar/SearchBar';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  return (
    <div>
      <h3>Hi from App component</h3>
      <SearchBar />
    </div>
  );
}

export default App;