import { Scene as Scenethree } from "three";
import Camara from "../clases/Camara";
import Luces from "../clases/Luces";
import Skybox from "../clases/Skybox";
import Loader from "../clases/Loader";
import Logo from "../clases/pokemon/logo";

export default class Scene extends Scenethree {
  private camara: Camara;
  constructor(renderer) {
    super();
    // llamamos a nuestra clase loader (configuracion)
    const loader = new Loader();
    new Logo(this, loader);

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
