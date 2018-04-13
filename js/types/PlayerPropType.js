import { bool, number, shape, string } from 'prop-types';

const PlayerPropType = shape({
    id: number.isRequired,
    name: string.isRequired,
    life: number.isRequired,
    color: string,
    isGameOver: bool,
});

export default PlayerPropType;
