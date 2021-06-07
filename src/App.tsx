import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbootstrap/css/bootstrap.min.css';
import Navigation from './components/navigation';
import BookContextProvider from './context/BookContext';
import './index.css';

function App() {
  return (
    <div className='main-font'>
      <BookContextProvider>
        <Navigation />
      </BookContextProvider>
    </div>
  );
}

export default App;
