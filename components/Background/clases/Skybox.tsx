import {
  BackSide,
  Mesh,
  MeshPhongMaterial,
  SphereGeometry,
  TextureLoader,
} from "three";

export default class Skybox {
  constructor(scene) {
    // crear skybox (las cosas que van de fondo ) (geomertia de la esfera)
    const skygeomety = new SphereGeometry(360, 25, 25); //tamaño/ num egament tamaño segmento

    const loader = new TextureLoader();
    // caragamos a textura
    const textura = loader.load("/custom-sky.png");
    const material02 = new MeshPhongMaterial({
      map: textura,
    });

    const skybox = new Mesh(skygeomety, material02); // creamos el sckibox con textura

    // agregar el skybox a la scena
    scene.add(skybox);
    skybox.material.side = BackSide; // para qeu se vea del aldo reverso
  }
}
