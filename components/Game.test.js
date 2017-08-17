import React from 'react';
import Game from './Game';

import renderer from 'react-test-renderer';

let render;

beforeEach(() => {
    pressSpy = jest.fn();
    longPressSpy = jest.fn();

    render = renderer.create(
        <Game />
    );
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
