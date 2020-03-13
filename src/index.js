import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

let toDoItems = [];
toDoItems.push({ id: 1, body: 'Apply to Sci Find', done: true });
toDoItems.push({ id: 2, body: 'Build a TODOs App', done: false });
toDoItems.push({ id: 3, body: 'Make billions', done: false });

ReactDOM.render(<App />, document.querySelector('#root'));
