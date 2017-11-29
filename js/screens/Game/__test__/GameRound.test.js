import React from 'react';
import { shallow } from 'enzyme';

import GameRound from '../GameRound';

describe('<GameRound />', () => {

    let component;

    beforeEach(() => {
        component = shallow(
            <GameRound
                numberOfPlayers={3}
                startingLifeTotal={40} />
        );
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

});
