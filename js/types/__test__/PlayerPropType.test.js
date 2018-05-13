import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import PlayerPropType from '../PlayerPropType';

const Component = ({ player }) => <React.Fragment player={player} />;
Component.propTypes = {
    player: PlayerPropType.isRequired,
};

const validatePropType = (player, name) => {
    PropTypes.checkPropTypes(Component.propTypes, { player }, 'player', `${Component.name}_${name}`);
};

describe('PlayerPropType', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    afterEach(() => {
        spy.mockReset();
    });

    describe('accepts a correct player shape', () => {
        it('without optionals', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: 20,
            };
            validatePropType(playerProps, 'RequiredOnly');
            expect(spy).not.toHaveBeenCalled();
        });

        it('with optional color as string', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: 20,
                color: '#000000',
            };
            validatePropType(playerProps, 'WithColor');
            expect(spy).not.toHaveBeenCalled();
        });

        it('with optional isGameOver as boolean', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: 20,
                isGameOver: false,
            };
            validatePropType(playerProps, 'WithIsGameOver');
            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('does not accept', () => {
        it('a non-number for id', () => {
            const playerProps = {
                id: '2',
                name: 'My Player Name',
                life: 20,
            };
            validatePropType(playerProps, 'IdAsNonNumber');
            expect(spy).toHaveBeenCalled();
        });

        it('a non-string for name', () => {
            const playerProps = {
                id: 2,
                name: false,
                life: 20,
            };
            validatePropType(playerProps, 'NameAsNonString');
            expect(spy).toHaveBeenCalled();
        });

        it('a non-number for life', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: '20',
            };
            validatePropType(playerProps, 'LifeAsNonNumber');
            expect(spy).toHaveBeenCalled();
        });

        it('a non-boolean for isGameOver', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: 20,
                isGameOver: 'undefined',
            };
            validatePropType(playerProps, 'IsGameOverAsNonBoolean');
            expect(spy).toHaveBeenCalled();
        });

        it('a non-string for color', () => {
            const playerProps = {
                id: 2,
                name: 'My Player Name',
                life: 20,
                color: false,
            };
            validatePropType(playerProps, 'IsGameOverAsNonBoolean');
            expect(spy).toHaveBeenCalled();
        });

        it('a boolean as type', () => {
            validatePropType(true, 'Boolean');
            expect(spy).toHaveBeenCalled();
        });

        it('a string as type', () => {
            validatePropType('string', 'String');
            expect(spy).toHaveBeenCalled();
        });

        it('a function as type', () => {
            validatePropType(() => {}, 'Function');
            expect(spy).toHaveBeenCalled();
        });

        it('a node as type', () => {
            validatePropType(shallow(<Component />), 'Node');
            expect(spy).toHaveBeenCalled();
        });

        it('an array as type', () => {
            validatePropType([], 'Array');
            expect(spy).toHaveBeenCalled();
        });
    });
});
