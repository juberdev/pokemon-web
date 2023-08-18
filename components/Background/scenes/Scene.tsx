import { Scene as Scenethree } from "three";
import Camara from "../clases/Camara";
import Luces from "../clases/Luces";
import Skybox from "../clases/Skybox";
import Loader from "../clases/Loader";
import Logo from "../clases/pokemon/logo";
import Pokeball from "../clases/pokemon/pokeball";
import Entei from "../clases/pokemon/Entei";
import Groudon from "../clases/pokemon/Groudon";
import Charizard from "../clases/pokemon/Charizard";
import Zekrom from "../clases/pokemon/Zekrom";
import Hierva from "../clases/pokemon/Hierva";

export default class Scene extends Scenethree {
  private camara: Camara;
  constructor(renderer) {
    super();
    // llamamos a nuestra clase loader (configuracion)
    const loader = new Loader();
    new Logo(this, loader);
    new Pokeball(this, loader);
    new Entei(this, loader);
    new Groudon(this, loader);
    new Charizard(this, loader);
    new Zekrom(this, loader);
    new Hierva(this, loader);

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
