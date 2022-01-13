// Spectrum component
// Renders rainbow-based art gallery in a flex-wrapper

import React from "react";
import ColorCard from "./ColorCard";

// should accept props from App, with color artwork assigned to an array
function Spectrum( { artworks } ) {
// class Spectrum extends React.Component {

  // map through spectrum array to create color artwork bubbles
  // console.log("Spectrum props <>>>", artworks) 
  const artworkCards = artworks.map(artwork => {
    // console.log("artwork details <>>>", artwork);
    // console.log("artwork people <>>>", artwork.people)
    return (
      <ColorCard 
        title={artwork.title}
        url={artwork.url}
        colors={artwork.colors}
        maker={artwork.people}
      ></ColorCard>
    )
  })

  // render() {
    return (
      <section className="spectrum-wrap">
        {/* {artworkCards} */}
        {/* display mapped color artwork bubbles here */}
      </section>
    );
  // }

}

export default Spectrum;