import { arrayOf, number, oneOfType, object } from 'prop-types';

const StylePropType = oneOfType([
    object,
    number,
    arrayOf(oneOfType([
        object,
        number,
    ])),
]);

export default StylePropType;
