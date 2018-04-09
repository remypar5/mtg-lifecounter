import React from 'react';
import { shallow } from 'enzyme';

import BackgroundImage from '../BackgroundImage';
import source from '../../../screens/Game/bgicon.png';

describe('<BackgroundImage />', () => {
    it('renders without crashing', () => {
        const component = shallow(<BackgroundImage source={source} />);
        expect(component).toMatchSnapshot();
    });

    it('accepts a style attribute', () => {
        const component = shallow(<BackgroundImage source={source} style={{ tintColor: '#0f0' }} />);
        expect(component).toMatchSnapshot();
    });
});
