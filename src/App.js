/**
 * App Name : Employee Management (Client)
 * file name : App.js
 * files descriptions : this is the entry point of the whole react app
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import Router from './router/index';
import Context from './context/index';

function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;
