import React from 'react';
import Counter from './Counter';

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />);

    cy.get('span[data-testId=counter]').should('have.text', '0');
  });
});
