import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
const middlewares = [thunk]
const mockStore = configureStore(middlewares);

import { chargeAllBreeds, getAllBreeds, getItemImages, removeFilterItem } from "../../actions/selectores"
import { types } from "../../types/types";

const store = mockStore({
    list: {
        searchList: [],
    }
})


describe('Pruebas en selectores', () => {

    test('las acciones sincronas deben funcionar ', () => {

        const action = removeFilterItem('raza1');

        expect( action ).toEqual({
            type: types.removeFilterItem,
            payload: {
                removeItem: 'raza1',
            }
        });
        
    });    

    test('debe creae lista de optionsList', async() => {
        
        await store.dispatch( getAllBreeds() );
            const actions = store.getActions();

            expect( actions[0] ).toEqual({
                type: '[Dogs List] Get Data',
                payload: expect.any(Object)
            });
        
        }); 
    
    test('llena la lista de filtros', async() => {
    
        await store.dispatch( getItemImages('african') );
            const add = store.getActions();

            expect( add[1] ).toEqual({
                type: '[fill] Add Item to Breeds and Sub Breeds List',
                payload: expect.any(Object)
            })
        
        })
        
  
    
})
