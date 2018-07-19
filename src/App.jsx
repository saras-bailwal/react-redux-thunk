import * as React from 'react';
import './App.css';
import Contactform from './components/contactForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contactform />
      </div>
    );
  }
}

export default App;
