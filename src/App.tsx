import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <header>
                <Header />  
            </header>
            <Home />
        </div>
    );
}

export default App;
