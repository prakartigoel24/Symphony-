import React from 'react'
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='main'>
      <div className="header flex flex-row justify-between items-center">
        <SearchBar />
        <Navbar />
      </div>
    </div>
  )
}

export default App