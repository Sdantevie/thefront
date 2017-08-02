import expect from 'expect';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Head from '../src/components/header/header';
import App from '../src/App';
describe('Component: Head', () => {
    it('renders without falling', () => {
        expect(
            shallow(
                <Head/>
            ).length
        ).toEqual(1);
    });
});

describe('Component: App', () => {
    it('renders well', () => {
        expect(shallow(<App/>).length).toEqual(1);
    })
});