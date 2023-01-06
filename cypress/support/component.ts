// Import commands.js using ES2015 syntax:
import './commands';

import '@styles/index.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(<MyComponent />)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
