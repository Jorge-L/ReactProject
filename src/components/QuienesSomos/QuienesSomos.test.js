import React from 'react';
import ReactDOM from 'react-dom';
import QuienesSomos from './QuienesSomos';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuienesSomos />, div);
  ReactDOM.unmountComponentAtNode(div);
});