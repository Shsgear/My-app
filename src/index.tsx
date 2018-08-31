import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './component/Hello/Hello';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  <Hello name="Shsgear" level={10} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
