import React from 'react';
import ReactDOM from 'react-dom';
import Hook from './Hook';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hook />, div);
  ReactDOM.unmountComponentAtNode(div);
});