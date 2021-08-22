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
        <div className="d-flex py-2 px-3 bg-dark justify-content-between">
            <div className=" rounded-circle bg-light px-2 py-2"><i className="fas fa-2x fa-dog"></i></div>
            <div className="col-10 col-lg-4 d-flex justify-content-end text-light">
               <p className="my-auto col-4 mr-1">Buscar Raza:</p>
               <div className="input-group my-2 d-flex flex-column">
                    <Select
                        options={ optionsList } 
                        name="semanas" 
                        className="w-100 text-dark"
                        placeholder="french bulldog"
                        onChange={ handleChangeOption }
                    />
                </div>
            </div>

        </div>
    )
}
