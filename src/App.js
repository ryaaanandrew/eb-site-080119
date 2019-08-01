import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <>
            <Header />
            <div className="content">
                <Navigation />
                <MainContent />
            </div>
        </>
    )
};

export default App;
