import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBreeds } from '../actions/selectores';
import { Header } from '../ui/Header';


export const Dogs = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getAllBreeds() );
    }, [])
    return (
        <div>
            <Header />
            <h3>Dogs</h3>
        </div>
    )
}
