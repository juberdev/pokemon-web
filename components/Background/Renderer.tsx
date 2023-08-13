import { WebGL1Renderer } from "three";
import Scene from "./scenes/Scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    // crear canvas de renderizado
    super({
      antialias: true, // evta que se vea pixelado
      canvas: document.getElementById("bg"), // asignamos el canva
    });
    // agregar el tamaño donde se av renderizar
    this.setSize(window.innerWidth, window.innerHeight);
    new Scene(this);
  }
}
