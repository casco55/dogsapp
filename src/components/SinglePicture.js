import React from 'react';

export const SinglePicture = ({item, selectedPicture}) => {
    return (
        <>
            <h3 className="text-center">{item}</h3>
            <img src={selectedPicture} alt="Imagen de raza" className="img-fluid h-75 mx-auto" />
        </>
    )
}

