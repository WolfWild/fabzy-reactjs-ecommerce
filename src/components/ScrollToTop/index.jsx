import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop(props) {
    const localtion = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [localtion]);
    return <>{props.children}</>;
}

export default ScrollToTop;
