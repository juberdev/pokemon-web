import { Scene as Scenethree } from "three";
import Camara from "../clases/Camara";
import Luces from "../clases/Luces";
import Skybox from "../clases/Skybox";

export default class Scene extends Scenethree {
  private camara: Camara;
  constructor(renderer) {
    super();
    // instanciasmos la camara
    this.camara = new Camara();
    // instanciamos las luces
    new Luces(this);
    // instanciamos el skybox
    new Skybox(this);
    this.update(renderer);
  }

  private update(renderer) {
    // dibujar la scena
    renderer.render(this, this.camara);

    // avisar el navegador que vamos animar
    requestAnimationFrame(this.update.bind(this, renderer));
  }
}
