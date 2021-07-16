import React from 'react';
import ReactDOM from 'react-dom';
import Propiedad from './Propiedad';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Propiedad />, div);
  ReactDOM.unmountComponentAtNode(div);
});