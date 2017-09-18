import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Head from '../src/components/header/Header';

describe('Component: Head', () => {
    it('renders without falling', () => {
        expect(
            shallow(
                <Head/>
            ).length
        ).to.equal(1);
    });
});
