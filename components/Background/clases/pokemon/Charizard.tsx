import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Charizard {
  private object: Group;
  // los ejes dependen de la camara
  constructor(scene, loader: GLTFLoader) {
    loader.load("/charizard.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      scene.add(this.object);
    });
  }

  private posicionar() {
    this.object.translateZ(16.5);
    this.object.translateY(-2);
    this.object.translateX(-10);

    this.object.rotateY(Math.PI / 2);
    this.object.scale.set(0.8, 0.8, 0.8);
  }
}
