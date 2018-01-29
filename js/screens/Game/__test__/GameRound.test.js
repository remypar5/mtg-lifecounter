import React from 'react';
import { shallow } from 'enzyme';

import GameRound from '../GameRound';

describe('<GameRound />', () => {
    let component;
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn();
        component = shallow(<GameRound
            navigation={{ dispatch }}
            numberOfPlayers={3}
            startingLifeTotal={40}
        />);
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
