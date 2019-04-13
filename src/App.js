import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <section className="App">
          <div className="container-fluid h-100">
          <Header></Header>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
