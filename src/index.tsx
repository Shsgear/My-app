import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import ClassHello from './component/Hello/Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

// ReactDOM.render(
//   <ClassHello name="Shsgear" level={10} />,
//   document.getElementById('root') as HTMLElement
// );

registerServiceWorker();
