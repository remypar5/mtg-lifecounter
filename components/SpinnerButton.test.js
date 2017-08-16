import React from 'react';
import SpinnerButton from './SpinnerButton';

import renderer from 'react-test-renderer';

let render;
let pressSpy;
let longPressSpy;

beforeEach(() => {
    pressSpy = jest.fn();
    longPressSpy = jest.fn();

    render = renderer.create(
        <SpinnerButton content="-"
            onPress={ pressSpy }
            onLongPress={ longPressSpy } />
    );
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
