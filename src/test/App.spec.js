import React from 'react';
import { mount } from '@cypress/react';
import Home from '../pages/Home'

it('renders learn react link', () => {
  mount(<Home/>);
  cy.get('h1').contains('Hi!');
});