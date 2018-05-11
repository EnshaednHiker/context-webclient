import React from 'react';
import {shallow, mount} from 'enzyme';


import Footer from '~/components/Footer/index.js';
//import configureStore from 'redux-mock-store'

// //*******************************************************************************************************
// describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
//     const initialState = {output:100}
//     const mockStore = configureStore()
//     let store,container

//     beforeEach(()=>{
//         store = mockStore(initialState)
//         //container = shallow(<Footer store={store} /> )  
//     })

//     describe('<Footer />', () => {
//         it('Renders without crashing', () => {
//             shallow(<Footer store={store} />);
//         });
//     });

// });

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
});

