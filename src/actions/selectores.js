import { types } from "../types/types";
import axios from 'axios';

const urlGetAll = 'https://dog.ceo/dog-api/api/breeds/list/all';
export const getAllBreeds = () => async dispatch =>{
    const response = await axios.get(urlGetAll);
    const dogsBreedsList = response;
    console.log(dogsBreedsList);
}

    