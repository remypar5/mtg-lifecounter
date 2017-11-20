import React from 'react';
import GameRound from '../GameRound';

import renderer from 'react-test-renderer';

let render;

beforeEach(() => {
    render = renderer.create(
        <GameRound
            numberOfPlayers={3}
            startingLifeTotal={40} />
    );
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
