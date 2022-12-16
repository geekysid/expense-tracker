import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDom.render(<App className="main" />, document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );