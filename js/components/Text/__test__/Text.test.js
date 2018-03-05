import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text';

describe('<Text />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Text type="heading">Heading</Text>);
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
