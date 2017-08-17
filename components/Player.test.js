import React from 'react';
import Player from './Player';

import renderer from 'react-test-renderer';

let render;

beforeEach(() => {
    render = renderer.create(<Player player={{ name: 'John Doe', lifeTotal: 40 }} />);
});

it('renders without crashing', () => {
    expect(render.toJSON()).toBeTruthy();
});
