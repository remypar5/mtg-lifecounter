import React from 'react';
import { shallow } from 'enzyme';

import SpinnerButton from '../SpinnerButton';

describe('<SpinnerButton />', () => {

    let component;
    let onPressSpy = jest.fn();
    let onHoldSpy = jest.fn();

    beforeEach(() => {
        component = shallow(
            <SpinnerButton
                content="-"
                onPress={ onPressSpy } />
            );

        onPressSpy.mockReset();
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call the onPress callback when it is pressed', () => {
        expect(onPressSpy).not.toHaveBeenCalled();

        component.simulate('press');
        expect(onPressSpy).toHaveBeenCalled();
    });

    describe('holding it down', () => {
        beforeEach(() => {
            jest.useFakeTimers();

            component = shallow(
                <SpinnerButton
                    onPress={ onPressSpy }
                    onHold={ onHoldSpy } />
            );

            onPressSpy.mockReset();
            onHoldSpy.mockReset();
        });

        it('should call only the onHold callback when it is held for 900ms', () => {
            expect(onPressSpy).not.toHaveBeenCalled();
            expect(onHoldSpy).not.toHaveBeenCalled();

            component.simulate('pressIn');
            expect(onHoldSpy).not.toHaveBeenCalled();

            jest.runOnlyPendingTimers();
            component.simulate('pressOut');

            expect(onHoldSpy).toHaveBeenCalled();
            expect(onPressSpy).not.toHaveBeenCalled();
        });

        it('should call only the onHold callback once every 900ms it is held', () => {
            expect(onPressSpy).not.toHaveBeenCalled();
            expect(onHoldSpy).not.toHaveBeenCalled();

            component.simulate('pressIn');
            expect(onHoldSpy).not.toHaveBeenCalled();

            jest.runOnlyPendingTimers();
            jest.runOnlyPendingTimers();
            component.simulate('pressOut');

            expect(onHoldSpy).toHaveBeenCalledTimes(2);
            expect(onPressSpy).not.toHaveBeenCalled();
        });
    });
});
