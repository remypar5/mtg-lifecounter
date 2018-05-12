import React from 'react';
import { shallow } from 'enzyme';

import About, { ContactMe } from '../About';

describe('<About />', () => {
    it('renders without crashing', () => {
        const component = shallow(<About />);
        expect(component).toMatchSnapshot();
    });
});

describe('<ContactMe />', () => {
    it('renders without crashing', () => {
        const component = shallow(<ContactMe />);
        expect(component).toMatchSnapshot();
    });
});
