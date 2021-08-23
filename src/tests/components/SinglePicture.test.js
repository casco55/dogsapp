import { shallow } from 'enzyme';
import React from 'react';


import { SinglePicture } from '../../components/SinglePicture';

describe('Pruebas en <SinglePicture />', () => {

        const item = 'raza';
        const selectedPicture = 'https://example.com';        
        const wrapper = shallow( <SinglePicture item={item} selectedPicture={selectedPicture} /> );

    test('debe mostrar el componente correctamente ', () => {

        
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe tener un h3 y un h2 con el item ', () => {
        const h3 = wrapper.find('h3');
        const h2 = wrapper.find('h2');
        expect( h3.text().trim() && h2.text().trim() ).toBe( item );
    })
    
    test('Debe tener una imagen con selectedPicture', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( selectedPicture );
    })
    
})
