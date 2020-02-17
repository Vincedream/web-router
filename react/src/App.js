import React from 'react';
import BrowserRouter from './router/BrowserRouter';
import Route from './router/Route'
import Link from './router/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        react router demo
      </header>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>
        <Route path="/home" render={() => <h1>home</h1>} />
        <Route path="/user" render={() => <h1>user</h1>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
