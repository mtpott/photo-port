import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
import ContactForm from '..';

afterEach(cleanup);

it('renders', () => {
    render(<ContactForm></ContactForm>);
})

describe('contactForm component', () => {
     //snapshot test
     it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('locate submit button', () => {
    it('locates button', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);

        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})