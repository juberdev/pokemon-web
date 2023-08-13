import { PerspectiveCamera } from "three";

export default class Camara extends PerspectiveCamera {
  constructor() {
    // crear la camara
    super(
      50, //defecto 50
      window.innerWidth / window.innerHeight, //after ration (tamaño)
      0.1, // desde que atn cerca esta la camara
      1000 // desde que tan lejos esta la camara
    );
    // mover la camara
    this.position.z = 6;
  }
}
