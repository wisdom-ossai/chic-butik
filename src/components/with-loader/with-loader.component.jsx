import React from 'react';
import PageLoader from '../page-loader/page-loader.component';

const WithLoaderHOC = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <PageLoader />
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };

    return Spinner
}

export default WithLoaderHOC;