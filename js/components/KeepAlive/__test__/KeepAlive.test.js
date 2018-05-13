import React from 'react';
import { shallow } from 'enzyme';
import { NativeModules } from 'react-native';

import KeepAlive from '../KeepAlive';

jest.mock('NativeModules', () => ({
    KeepAliveModule: {
        activate: jest.fn(),
        deactivate: jest.fn(),
    },
}));

describe('<KeepAlive />', () => {
    let component;
    const activateSpy = jest.spyOn(NativeModules.KeepAliveModule, 'activate');
    const deactivateSpy = jest.spyOn(NativeModules.KeepAliveModule, 'deactivate');

    beforeEach(() => {
        activateSpy.mockReset();
        deactivateSpy.mockReset();

        expect(activateSpy).not.toHaveBeenCalled();
        component = shallow(<KeepAlive />);
        expect(activateSpy).toHaveBeenCalled();
    });

    it('calls the activate method of KeepAliveModule when KeepAlive is mounted', () => {
        expect(activateSpy).toHaveBeenCalled();
        expect(deactivateSpy).not.toHaveBeenCalled();
    });

    it('calls the deactivate method of KeepAliveModule when KeepAlive is unmounted', () => {
        component.unmount();

        expect(deactivateSpy).toHaveBeenCalled();
    });
});
