import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import StylePropType from '../StylePropType';

const Component = ({ style }) => <React.Fragment style={style} />;
Component.propTypes = {
    style: StylePropType.isRequired,
};

const validatePropType = (style, name) => {
    PropTypes.checkPropTypes(Component.propTypes, { style }, 'style', `${Component.name}_${name}`);
};

describe('StylePropType', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    afterEach(() => {
        spy.mockReset();
    });

    describe('accepts', () => {
        // Stylesheet.create(styles) returns creates object of numbers, which refer to
        //   an array of styles. So, numbers are a valid type
        it('a number as type', () => {
            validatePropType(2);
            expect(spy).not.toHaveBeenCalled();
        });

        it('an object as type', () => {
            validatePropType({ width: '50%' });
            expect(spy).not.toHaveBeenCalled();
        });

        it('an array of numbers as type', () => {
            validatePropType([2, 18]);
            expect(spy).not.toHaveBeenCalled();
        });

        it('an array of objects as type', () => {
            validatePropType([{ width: '50%' }, { height: '50%' }]);
            expect(spy).not.toHaveBeenCalled();
        });

        it('a mixed array of numbers and objects as type', () => {
            validatePropType([2, { width: '50%' }, 18, { height: '50%' }]);
            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('does not accept', () => {
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

        it('an array with any of the unacceptable types as type', () => {
            validatePropType([true, 'string', () => {}], 'Mixed Array');
            expect(spy).toHaveBeenCalled();
        });
    });
});
