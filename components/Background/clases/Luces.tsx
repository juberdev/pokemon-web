import { AmbientLight, DirectionalLight, HemisphereLight } from "three";
// DirectionalLight, //luz del sol
// HemisphereLight,//luz general;
// AmbientLight, //luz general;
export default class Luces {
  constructor(scene) {
    // crear la ilumincacion
    scene.add(new AmbientLight(0xffffff, 3)); //luz - intecidad
    scene.add(new HemisphereLight(0xffffff, 2)); //luz - intecidad

    const sol = new DirectionalLight(0xffffff, 3);
    sol.position.set(20, 20, 5);
    scene.add(sol);
  }
}
