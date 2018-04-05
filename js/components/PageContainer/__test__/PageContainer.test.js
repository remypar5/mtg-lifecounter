import React from 'react';
import { shallow } from 'enzyme';

import PageContainer from '../PageContainer';

describe('<PageContainer />', () => {
    it('renders without crashing', () => {
        const component = shallow(<PageContainer>Hallo</PageContainer>);
        expect(component).toMatchSnapshot();
    });

    it('accepts a style attribute', () => {
        const component = shallow(<PageContainer style={{ width: '50%' }}>Hallo</PageContainer>);
        expect(component).toMatchSnapshot();
    });
});
