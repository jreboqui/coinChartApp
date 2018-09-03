import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/common/list/List';
import Detail from './components/details/Detail';
import NotFound from './components/notfound/NotFound';
import './index.css';

const App = () => {
  const title = 'jreboqui';
  
  return (
    <BrowserRouter>
      <div>
      <Header />
        <h1> {title} </h1>
     <Switch>
      <Route path="/" component={List} exact />
      <Route path="/currency/:id" component={Detail} exact />
      <Route component={NotFound} />
     </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
