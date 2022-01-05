// Spectrum component
// Renders rainbow-based art gallery in a flex-wrapper

import React from "react";

// should accept props from App, with color artwork assigned to an array
class Spectrum extends React.Component {

  // map through spectrum array to create color artwork bubbles 

  render() {
    return (
      <section className="spectrum-wrap">
        {colorArtwork}
      </section>
    );
  }

}

export default Spectrum;