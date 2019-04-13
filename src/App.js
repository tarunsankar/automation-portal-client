import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page/Home';
import Dashboard from './page/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <section className="App">
            <div className="container-fluid h-100">
              <Header></Header>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/dashboard' component={Dashboard}/>
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
