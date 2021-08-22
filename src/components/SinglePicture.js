import React from 'react';

export const SinglePicture = ({item, image}) => {
    return (
        <>
            <h3 className="text-center">{item}</h3>
            <img src={image} alt="Imagen de raza" className="img-fluid" />
        </>
    )
}

