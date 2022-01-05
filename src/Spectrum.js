// Spectrum component
// Renders rainbow-based art gallery in a flex-wrapper

// should accept props from App, with color artwork assigned to an array
function Spectrum() {

  // map through spectrum array to create color artwork bubbles 

  return (
    <section className="spectrum-wrap">
      {colorArtwork}
    </section>
  );
}

export default Spectrum;