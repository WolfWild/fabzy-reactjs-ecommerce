import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import RoutesConfig from './routesConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
function App() {
    return (
        <div className="App">
            <ScrollToTop>
                <RoutesConfig />
            </ScrollToTop>
            <ToastContainer />
        </div>
    );
}

export default App;
