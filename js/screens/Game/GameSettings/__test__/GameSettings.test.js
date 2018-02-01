import React from 'react';
import { shallow } from 'enzyme';

import GameSettings from '../GameSettings';

describe('<GameSettings />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<GameSettings navigation={{}} />);
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
