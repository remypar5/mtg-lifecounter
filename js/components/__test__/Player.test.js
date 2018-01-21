import React from 'react';
import { shallow } from 'enzyme';

import Player from '../Player';

describe('<Player />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Player player={{ name: 'John Doe', life: 40 }} />);
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
