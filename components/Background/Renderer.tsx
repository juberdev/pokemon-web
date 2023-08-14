import { WebGL1Renderer } from "three";
import Scene from "./scenes/Scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    // crear canvas de renderizado
    super({
      antialias: true, // evta que se vea pixelado
      canvas: document.getElementById("bg"), // asignamos el canva
    });
    this.config();
    new Scene(this);
  }

  private config() {
    // agregar el tamaño donde se av renderizar
    this.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", this.resize);
  }

  private resize() {
    // refersxamos la pagina cuandoesta cambia de tamaño
    window.location.reload();
  }
}
