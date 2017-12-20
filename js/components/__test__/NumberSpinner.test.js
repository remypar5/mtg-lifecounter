import React from 'react';
import { shallow } from 'enzyme';

import NumberSpinner from '../NumberSpinner';

describe('<NumberSpinner />', () => {

    let component;

    beforeEach(() => {
        component = shallow(
            <NumberSpinner
                value={20} />
        );
    });

    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('should initialize with the provided value', () => {
        expect(component
            .find('Text')
            .get(0)
            .props
            .children
        )
        .toBe(20);
    });

    describe('changing the value', () => {
        it('should be able to decrease the value by 1 by pressing the down spinner button', () => {
            expect(component.find('Text').at(0).childAt(0).text()).toBe("20");

            component.find('SpinnerButton').at(0).simulate('press');
            expect(component.find('Text').at(0).childAt(0).text()).toBe("19");
        });

        it('should be able to increase the value by 1 by pressing the up spinner button', () => {
            expect(component.find('Text').at(0).childAt(0).text()).toBe("20");

            component.find('SpinnerButton').at(1).simulate('press');
            expect(component.find('Text').at(0).childAt(0).text()).toBe("21");
        });

        it('should be able to decrease the value by 10 by holding the down spinner button', () => {
            expect(component.find('Text').at(0).childAt(0).text()).toBe("20");

            component.find('SpinnerButton').at(0).simulate('hold');
            expect(component.find('Text').at(0).childAt(0).text()).toBe("10");
        });

        it('should be able to increase the value by 10 by holding the up spinner button', () => {
            expect(component.find('Text').at(0).childAt(0).text()).toBe("20");

            component.find('SpinnerButton').at(1).simulate('hold');
            expect(component.find('Text').at(0).childAt(0).text()).toBe("30");
        });

        it('should call the onChange event listener', () => {
            const onChangeSpy = jest.fn();
            const component = shallow(
                <NumberSpinner
                    value={20}
                    onChange={ onChangeSpy } />
            );

            component.find('SpinnerButton').at(1).simulate('press');
            expect(onChangeSpy).toHaveBeenCalledWith(21);
        });

        describe('limitations', () => {
            beforeEach(() => {
                component = shallow(
                    <NumberSpinner
                        value={20}
                        min={19}
                        max={21} />
                );
            });

            it('should not exceed the provided min value', () => {
                component.find('SpinnerButton').at(0).simulate('press');
                expect(component.find('Text').at(0).childAt(0).text()).toBe("19");

                // Do it again
                component.find('SpinnerButton').at(0).simulate('press');
                expect(component.find('Text').at(0).childAt(0).text()).toBe("19");
            });

            it('should not exceed the provided max value', () => {
                component.find('SpinnerButton').at(1).simulate('press');
                expect(component.find('Text').at(0).childAt(0).text()).toBe("21");

                // Do it again
                component.find('SpinnerButton').at(1).simulate('press');
                expect(component.find('Text').at(0).childAt(0).text()).toBe("21");
            });
        });
    });

});
