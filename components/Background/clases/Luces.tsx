import { AmbientLight, HemisphereLight } from "three";
// DirectionalLight, //luz del sol
// HemisphereLight,//luz general;
// AmbientLight, //luz general;
export default class Luces {
  constructor(scene) {
    // crear la ilumincacion
    scene.add(new AmbientLight(0xffffff, 0.8)); //luz - intecidad
    scene.add(new HemisphereLight(0xffffff, 0.8)); //luz - intecidad
  }
}
