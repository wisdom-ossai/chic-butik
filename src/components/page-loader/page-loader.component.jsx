import React from 'react';
import Loader from 'react-loader-spinner';

const PageLoader = () => (
    <div className="pageLoader">
        <Loader
            type="Oval"
            color="#1b1b1b"
            height={100}
            width={100}
            timeout={2000}
        />
    </div>
);

export default PageLoader