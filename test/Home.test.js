import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../src/components/Home/home';

describe('Component: Home', () => {
    it('renders without explosion', () => {
        expect(
            shallow(
                <Home/>
            ).length
        ).to.equal(1);
    });
});