import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import RoutesConfig from './routesConfig';

function App() {
    return (
        <div className="App">
            <ScrollToTop>
                <RoutesConfig />
            </ScrollToTop>
        </div>
    );
}

export default App;
