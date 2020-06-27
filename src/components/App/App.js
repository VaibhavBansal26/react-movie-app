import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';

//Always treat state as a immutable object

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
