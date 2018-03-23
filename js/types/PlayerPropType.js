import { boolean, number, shape, string } from 'prop-types';

const PlayerPropType = shape({
    id: number.isRequired,
    name: string.isRequired,
    life: number.isRequired,
    color: string,
    isGameOver: boolean,
});

export default PlayerPropType;
