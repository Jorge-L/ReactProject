import React from 'react';
import ReactDOM from 'react-dom';
import FormularioContacto from './FormularioContacto';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormularioContacto />, div);
  ReactDOM.unmountComponentAtNode(div);
});