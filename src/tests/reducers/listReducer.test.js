import { listReducer } from "../../reducers/listReducer"
import { types } from "../../types/types"

describe('Pruebas en reducers', () => {
    

    test('Debe cargar la optionsList ', () => {

        const initialState = {
            searchList: [],
        }

        const action = {
            type: types.getDogsBreeds,
            payload: {
                optionsList: ['raza1', 'raza2', 'raza3'],
            }
        }
        const state = listReducer (initialState, action);
        
        expect( state ).toEqual({
            searchList: [],
            optionsList: ['raza1', 'raza2', 'raza3'],
        })
    })

    test('Debe llenar la searchList ', () => {

        const initialState = {
            searchList: [],
            optionsList: ['raza1', 'raza2', 'raza3'],
        }

        const action = {
            type: types.fillList,
            payload: {
                breedImages: 'raza1',
            }
        }
        const state = listReducer (initialState, action);
        
        expect( state ).toEqual({
            searchList: ['raza1'],
            optionsList: ['raza1', 'raza2', 'raza3'],
        })
    })

    test('Debe eliminar item de la searchList ', () => {

        const initialState = {
            searchList: ['raza1'],
            optionsList: ['raza1', 'raza2', 'raza3'],
        }

        const action = {
            type: types.removeFilterItem,
            payload: ['raza1'],
        }

        
        const state = listReducer (initialState, action);
        
        expect( state ).toEqual({
            searchList: [],
            optionsList: ['raza1', 'raza2', 'raza3'],
        })
    })
    
    
})
