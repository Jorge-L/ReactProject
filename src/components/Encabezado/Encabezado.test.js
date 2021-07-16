import React from 'react';
import ReactDOM from 'react-dom';
import Encabezado from './Encabezado';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Encabezado />, div);
  ReactDOM.unmountComponentAtNode(div);
});