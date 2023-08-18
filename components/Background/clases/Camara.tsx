import { PerspectiveCamera } from "three";

export default class Camara extends PerspectiveCamera {
  private container: HTMLElement;

  constructor() {
    // crear la camara
    super(
      75, //defecto 50
      window.innerWidth / window.innerHeight, //after ration (tamaño)
      0.1, // desde que atn cerca esta la camara
      1000 // desde que tan lejos esta la camara
    );

    // seteamos el contenefor de section
    this.container = document.getElementById("container");
    // llamamos a al funcion cada que hacemos scrol
    this.container.onscroll = this.moverCamara.bind(this);
    // se ejecuta la primera vez
    this.moverCamara();
    // mover la camara
    this.position.y = 2;
  }

  private moverCamara() {
    const scrolltop = this.container.scrollTop;
    const scrollHeight = this.container.scrollHeight;
    const offsetHeight = this.container.offsetHeight;
    const t = (scrolltop * 100) / (scrollHeight - offsetHeight);
    console.log(t);

    this.position.z = t * 0.35;
    this.position.x = t * 0.025;
    this.rotation.y = t * 0.025;
    // console.log(this.container.scrollHeight);
    // console.log(this.container.offsetHeight);
    // console.log(this.container.scrollTop);
  }
}
