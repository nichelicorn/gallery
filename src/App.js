import React from 'react';
import Spectrum from "./Spectrum";
import './App.css';
import testObjects from './test-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // images: []
      images: testObjects
    }
  }
  // App state should contain { spectrum: [ r o y g b i v ] }
  // pass each color value on to the Spectrum
  // add fetch request to API for color-based images (read through ElasticSearch documentation in the API docs to set up queries)
  
  // assign random artwork to each color based on the hue value of colors[0] of image

  // For now, conditional rendering will be used to display either the Spectrum or the Gallery view

  // A query on the Objects resource in the API will reveal all object data based on id

  componentDidMount() {
    console.log("test images in state? <>>>", this.state.images === testObjects);
    // console.log("images in state <>>>", this.state.images);
  }

  render() {
    return (
      <main className="App">
        {/* add Header component here */}
        <header className="App-header">
          <h1>Spectrum</h1>
        </header>
        <Spectrum images={this.state.images}></Spectrum>
        {/* when a user clicks on a ColorCard, render the Gallery view */}
        {/* add Footer component here */}
      </main>
    );
  }
}

export default App;