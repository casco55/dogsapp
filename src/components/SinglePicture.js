import React from 'react';
import PropTypes from 'prop-types';

export const SinglePicture = ({item, selectedPicture}) => {
    return (
        <>
            <div className="container-fluid d-flex flex-column">
                <h3 className="text-center d-md-none mt-1 mt-md-2">{item}</h3>
                <h2 className="text-center d-none d-md-block mt-1 mt-md-2">{item}</h2>
                <img src={selectedPicture} alt="Imagen de raza" className="img-fluid h-75 mx-auto my-auto" />
            </div>
        </>
    )
}

SinglePicture.propTypes = {
    item: PropTypes.string.isRequired,
    selectedPicture: PropTypes.string.isRequired,
}
