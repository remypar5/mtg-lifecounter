import React from 'react';
import Game from './Game';

import renderer from 'react-test-renderer';

let render;

beforeEach(() => {
    render = renderer.create(
        <Game />
    );
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
