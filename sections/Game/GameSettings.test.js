import React from 'react';
import GameSettings from './GameSettings';

import renderer from 'react-test-renderer';

let render;
const onStartSpy = jest.fn();

beforeEach(() => {
    render = renderer.create(
        <GameSettings onStart={ onStartSpy } />
    );
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
