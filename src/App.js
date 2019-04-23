import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <section className="App">
            <div className="container-fluid h-100">
              <Header></Header>
              <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/' component={Dashboard}/>
              </Switch>
            </div>
          </section>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
