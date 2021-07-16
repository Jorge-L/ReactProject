import React from 'react';
import ReactDOM from 'react-dom';
import Contenido from './Contenido';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contenido />, div);
  ReactDOM.unmountComponentAtNode(div);
});