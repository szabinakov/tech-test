import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search.js';

describe('Search', () => {
    const {asFragment} = render (<Search/>)

    it('it renders correctly', () => {
        
        expect(asFragment()).toMatchSnapshot()
    })
})