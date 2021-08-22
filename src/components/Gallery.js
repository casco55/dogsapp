import React, { useState } from 'react'
import { SinglePicture } from './SinglePicture';

export const Gallery = ({item, images}) => {

    const initialState = {
        selectedPicture: '',
    }   

    const [values, setValues] = useState(initialState);
    const { selectedPicture } = values;
    console.log(selectedPicture);

    const scrollLeft = () => {
        const container = document.getElementById(item);
                let scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft -= 100;
                    scrollAmount += 10;
                    if(scrollAmount >= 80){
                        window.clearInterval(slideTimer);
                    }
                }, 50);
        
    }
    const scorllRight = () => {
        const container = document.getElementById(item);
                let scrollAmount = 0;
                var slideTimer = setInterval(function(){
                    container.scrollLeft += 100;
                    scrollAmount += 10;
                    if(scrollAmount >= 80){
                        window.clearInterval(slideTimer);
                    }
                }, 50);
    }



    return (
        <>
            <h5 className="mt-3 ml-2">{item}:</h5>
            <div className="d-flex col-12">
                <i className="d-none d-md-block fas fa-2x fa-angle-left my-auto" onClick={ scrollLeft }></i>
                <div className="d-flex flex-row overflow-y my-2 mx-md-2" id={item}>
                    {images.length > 0 && 

                        images.map((image) => (
                            <div className="col-4 col-md-2 col-lg-2 my-auto" key={image}>
                                <img src={image} alt="Imagen de perro" className="img-fluid" onClick={() => setValues({...values, selectedPicture: image})}/>
                            </div>
                        ))
                        
                    }
                </div>
                <i className="d-none d-md-block fas fa-2x fa-angle-right my-auto" onClick={ scorllRight }></i>
            </div>

            {selectedPicture !== '' &&
                <div className="fixed-top bg-light col-lg-12 pb-5 d-flex flex-column h-100 over">
                    <div className="mr-0 ml-auto">
                            <i className="far fa-times-circle fa-3x" onClick={ () => setValues(initialState) }></i>
                        </div>        
                    <SinglePicture selectedPicture ={selectedPicture} item={item} />
                     
                </div>
            }
        </>
    )
}
