import { types } from "../types/types";
import axios from 'axios';
import Swal from 'sweetalert2';


const urlGetAll = 'https://dog.ceo/api/breeds/list/all';
export const getAllBreeds = () => async dispatch =>{
    const config = {
        method: 'get',
        url: urlGetAll,
        headers: { }
      };
      const optionsList = [];
      axios(config)
      .then(function (response) {   
            
                const dogsBreedsList = response.data.message;
                Object.entries(dogsBreedsList).forEach(([key, value]) => {
                    optionsList.push({'value': key, 'label': key});
                    if(value.length > 0){
                        value.forEach((val) => {
                            const subBreed = key + ' ' + val;
                            
                            optionsList.push({'value': subBreed, 'label': subBreed});
                        })
                        
                    }
                });
                dispatch( chargeAllBreeds(optionsList) );   
        
      })
      .catch(function (error) {
        Swal.fire('Error al conectar al servidor')
        optionsList.push({'value': '', 'label': ''});
        dispatch( chargeAllBreeds(optionsList) );
      });
    }

export const chargeAllBreeds = (optionsList) => {
    return {
        type: types.getDogsBreeds,
        payload: {
            optionsList,
        }
    }
}

export const getItemImages = (addItem) =>async dispatch =>{
    const addItemUrl = addItem.replace(" ", "/")
    
    const config = {
        method: 'get',
        url: `https://dog.ceo/api/breed/${addItemUrl}/images`,
        headers: { }
      };
      axios(config)
      .then(function (response) {
        const imageList = response.data.message;
       
        dispatch( fillList(addItem, imageList) );
      })
      .catch(function (error) {
        Swal.fire('Error al conectar al servidor');
      });
}

export const fillList = ( addItem, imageList ) => {
    const breedImages = {'breed': addItem, 'images': imageList};
    return {
        type: types.fillList,
        payload: {
            breedImages,
        }
    }
}

export const removeFilterItem = ( removeItem ) => {
    
    return {
        type: types.removeFilterItem,
        payload: {
            removeItem,
        }
    }
}




