import { AnimationMixer, Clock, Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Pokeball {
  private object: Group;
  private clock = new Clock();
  private animation: AnimationMixer;

  // los ejes dependen de la camara
  constructor(scene, loader: GLTFLoader) {
    this.clock = new Clock();
    loader.load("/pokeball.glb", (gltf) => {
      this.object = gltf.scene;
      this.posicionar();
      this.animar(gltf);
      scene.add(this.object);
    });
    this.update();
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 1200) * 8) / 460 + 14;
      this.object.translateY(-1);
      this.object.translateX(ratio);
      this.object.translateZ(-23);
      this.object.rotateY(-Math.PI / 1.5);
    } else {
      this.object.translateY(5.8);
      this.object.translateZ(-20);
      this.object.rotateY(-Math.PI / 2);
    }
    // horataObejto
    this.object.rotateZ(Math.PI / 20);

    // scalar obejto x- y-z
    this.object.scale.set(2, 2, 2);
  }

  private update() {
    // detal time es lo que se tarde en ejecutar el frame(animacion fluida)
    const delta = this.clock.getDelta();
    if (this.object) this.animation.update(delta);
    // if (this.object) this.object.rotation.y = Math.sin(this.delt) / 7 + 1.2;
    requestAnimationFrame(this.update.bind(this));
  }

  private animar(gltf) {
    this.animation = new AnimationMixer(this.object);
    const action = this.animation.clipAction(gltf.animations[0]);
    action.play();
  }
}
