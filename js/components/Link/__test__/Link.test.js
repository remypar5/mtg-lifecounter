import React from 'react';
import { Linking } from 'react-native';
import { shallow } from 'enzyme';

import Link from '../Link';


jest.mock('Linking', () => ({
    canOpenURL: jest.fn()
        .mockReturnValue({
            then: () => Promise.resolve(true),
        }),
    openURL: jest.fn()
        .mockReturnValue({
            then: () => Promise.resolve(),
        }),
}));

describe('<Link />', () => {
    let component;
    const canOpenURLSpy = jest.spyOn(Linking, 'canOpenURL')
        .mockImplementation(() => Promise.resolve(true));
    const openURLSpy = jest.spyOn(Linking, 'openURL')
        .mockImplementation(() => Promise.resolve());

    beforeAll(() => {
        canOpenURLSpy.mockClear();
        openURLSpy.mockClear();

        component = shallow((
            <Link href="https://github.com/remypar5/mtg-lifecounter">
                Fork me on GitHub
            </Link>
        ));
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('tries to open the given `href`', () => {
        expect.assertions(1);
        const link = component.find('Text').at(0);
        link.simulate('press');

        // console.log(canOpenURLSpy);

        return expect(canOpenURLSpy()).resolves.toBe(true);
    });
});
