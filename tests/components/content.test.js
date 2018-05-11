import React from 'react';
import {shallow, mount} from 'enzyme';
import Content from '~/components/Content/index.js';


describe('<Content />', () => {
    it('Renders without crashing', () => {
        shallow(<Content />);
    });
});