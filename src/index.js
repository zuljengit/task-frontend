import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const title = 'My Minimal React Webpack Babel Setup';
ReactDOM.render(
  React.createElement(App, {
    title,
  }),
  document.getElementById('app')
);
if (module.hot) {
  module.hot.accept();
}
