import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './Inicio';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Inicio />, div);
  ReactDOM.unmountComponentAtNode(div);
});