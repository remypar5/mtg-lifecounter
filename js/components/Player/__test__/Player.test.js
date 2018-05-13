import React from 'react';
import { shallow } from 'enzyme';

import Player from '../Player';

describe('<Player />', () => {
    it('renders without crashing', () => {
        const component = shallow(<Player size="small" player={{ id: 0, name: 'John Doe', life: 40 }} />);
        expect(component).toMatchSnapshot();
    });

    it('renders a large player name without crashing', () => {
        const largeComponent = shallow(<Player size="large" player={{ id: 0, name: 'Joe at Large', life: 2000 }} />);
        expect(largeComponent).toMatchSnapshot();
    });

    it('renders a "dead" player with a red background color', () => {
        const deadComponent = shallow(<Player size="large" player={{ id: 0, name: 'Dead-eye Joe', life: 0 }} />);
        expect(deadComponent).toMatchSnapshot();
    });

    describe('interaction', () => {
        let component;
        const onGameOver = jest.fn();

        beforeEach(() => {
            component = shallow(<Player
                size="small"
                player={{ id: 0, name: 'Joe Interactive', life: 1 }}
                onGameOver={onGameOver}
            />);
            onGameOver.mockReset();
            onGameOver.mockClear();
        });

        it.skip('triggers the onGameOver callback with the corresponding state', () => {
            const lifeSpinner = component.find('NumberSpinner').at(0);
            const textField = lifeSpinner.find('Text').at(0).childAt(0);

            const lifeMinusButton = lifeSpinner.find('SpinnerButton').at(0).childAt(0);
            lifeMinusButton.simulate('press');
            expect(textField.text()).toBe('0');
            expect(onGameOver).toBeCalledWith(true);

            const lifePlusButton = lifeSpinner.find('SpinnerButton').at(1).childAt(0);
            lifePlusButton.simulate('press');
            expect(textField.text()).toBe('1');
            expect(onGameOver).toBeCalledWith(false);
        });
    });
});
