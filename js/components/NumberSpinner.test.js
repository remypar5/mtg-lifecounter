import React from 'react';
import NumberSpinner from './NumberSpinner';

import renderer from 'react-test-renderer';

let render;

beforeEach(() => {
    render = renderer.create(<NumberSpinner value={3} />);
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});

it('should initialize with the provided value', () => {
    const component = render.toJSON();
    
    expect(component.children[1].children[0]).toBe('3');
});

it.skip('should be able to increase or decrease the value by pressing the spinner buttons', () => {
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
