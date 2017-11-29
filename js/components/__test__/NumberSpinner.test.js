import React from 'react';
import { shallow } from 'enzyme';

import NumberSpinner from '../NumberSpinner';

describe('<NumberSpinner />', () => {

    let component;

    beforeEach(() => {
        component = shallow(
            <NumberSpinner
                value={3} />
        );
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('should initialize with the provided value', () => {
        expect(component
            .find('Text')
            .get(0)
            .props
            .children
        )
        .toBe(3);
    });

    it.skip('should be able to increase or decrease the value by pressing the spinner buttons', () => {
        const render = renderer.create(<NumberSpinner value={3} />);
        const component = render.toJSON();

        // Simulate clicking a button to change the value
        expect(component.children[1].children[0]).toBe('4');
    });

    it.skip('should call the onChange event listener', () => {
        const onChangeSpy = jest.fn();
        const render = renderer.create(
            <NumberSpinner
                value={3}
                onChange={onChangeSpy} />
        );

        // Simulate clicking a button to change the value
        expect(onChangeSpy).toHaveBeenCalled();
    });
});
