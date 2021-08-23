import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBreeds } from '../actions/selectores';
import { Header } from '../ui/Header';
import { FilterItem } from './FilterItem';
import { Gallery } from './Gallery';


export const Dogs = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getAllBreeds() );
    }, [dispatch]);
    const { optionsList } = useSelector(state => state.list);
    const { searchList } = useSelector(state => state.list);
    
    return (
        <>
            <div className="sticky-top">
                {optionsList !== undefined && 
                    <Header optionsList={optionsList} />
                } 
                {searchList.length > 0 && 
                    <div className="d-flex flex-row sticky-top overflow-y bg-light">
                        {searchList.map((item) => (
                            <FilterItem key={item.breed} item={item.breed} />
                        ))}
                    </div>
                }
            </div>
            {searchList.length > 0 && 
                <div className="d-flex flex-column mt-3 overflow-auto ">
                    {searchList.map((item) => (
                        <Gallery key={item.breed} item={item.breed} images={item.images} />
                    ))}
                </div>
            }
            
        </>
    )
}
