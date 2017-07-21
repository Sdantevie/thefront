import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Home from '../src/components/home/home';

describe('Component: Home', () => {
    it('renders without exploding', () => {
        expect(
            shallow(
                <Home/>
            ).length
        ).toEqual(1);
    });
});