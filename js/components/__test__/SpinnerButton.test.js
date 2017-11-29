import React from 'react';
import { shallow } from 'enzyme';

import SpinnerButton from '../SpinnerButton';

describe('<SpinnerButton />', () => {

    let component;
    let onPressSpy = jest.fn();
    let onLongPressSpy = jest.fn();

    beforeEach(() => {
        component = shallow(
            <SpinnerButton
                content="-"
                onPress={ onPressSpy }
                onLongPress={ onLongPressSpy } />
        );
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
