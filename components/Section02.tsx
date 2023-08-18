import React from "react";

export default function Section2() {
  return (
    <section>
      <div className="center" id="s2">
        <h1>texto del titulo</h1>
        <p>
          Mesh objects represent drawing a specific Geometry with a specific
          Material. Both Material objects and Geometry objects can be used by
          multiple Mesh objects. For example to draw two blue cubes in different
          locations we could need two Mesh objects to represent the position and
          orientation of each cube.
        </p>
      </div>
    </section>
  );
}
