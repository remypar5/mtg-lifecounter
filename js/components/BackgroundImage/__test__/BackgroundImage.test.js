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
        const component = shallow(<BackgroundImage source={source} style={{ width: '50%' }} />);
        expect(component).toMatchSnapshot();
    });
});
