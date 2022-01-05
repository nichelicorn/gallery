import React from 'react';
import Spectrum from "./Spectrum";
import './App.css';

class App extends React.Component {

  // App state should contain { spectrum: [ r o y g b i v ] }
  // pass each color value on to the Spectrum
  // add fetch request to API for color-based images (read through ElasticSearch documentation in the API docs to set up queries)
  
  // assign random artwork to each color based on the hue value of colors[0] of image
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Spectrum</h1>
        </header>
        {/* add Header component here */}
        <Spectrum ></Spectrum>
        {/* add Footer component here */}
      </main>
    );
  }
}

export default App;