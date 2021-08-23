import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getItemImages } from '../actions/selectores';

export const Header = ({ optionsList }) => {

const dispatch = useDispatch();   
const { searchList } = useSelector(state => state.list)
const handleChangeOption = e => {
    
    !searchList.some(breed => breed.breed === e.value) && dispatch( getItemImages(e.value) );
}


    return (
        <div className="d-flex py-2 mb-2 px-md-3 bg-dark justify-content-between ">
            <div className="ml-1 rounded-circle bg-light px-2 py-2"><i className="fas fa-2x fa-dog"></i></div>
            <div className="col-10 col-md-6 d-flex justify-content-end text-light">
               <p className="my-auto mr-md-1">Buscar Raza:</p>
               
                    <Select
                        options={ optionsList } 
                        name="semanas" 
                        className="w-50 w-md-75 text-dark texto my-2 "
                        placeholder="bulldog"
                        menuPortalTarget={document.body} 
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                        onChange={ handleChangeOption }
                    />
                
            </div>

        </div>
    )
}
