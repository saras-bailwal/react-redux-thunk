import React from 'react';
import {Contactform} from './src/components/contactForm';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <Contactform />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});