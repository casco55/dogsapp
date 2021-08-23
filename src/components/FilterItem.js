import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFilterItem } from '../actions/selectores';


export const FilterItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(removeFilterItem(item))
    }
    return (
        <>
            <div className="d-flex justify-content-between col-7 col-md-2 my-2 mx-2 px-2 py-1 my-auto border border-dark rounded-pill borderFIlterItem texto"   >
                {item}
                <i className="mr-1 far fa-times-circle my-auto" onClick={ handleRemoveItem }></i>
            </div>
        </>
    )
}
