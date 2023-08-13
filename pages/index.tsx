import { useEffect } from "react";
import {
  Scene,
  WebGL1Renderer,
  PerspectiveCamera,
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  SphereGeometry,
  TextureLoader,
  BackSide,
  MeshPhongMaterial,
  DirectionalLight, //luz del sol
  HemisphereLight,
  AmbientLight, //luz genera;
} from "three";

export default function Page() {
  useEffect(() => {
    // crear la ecena
    const scene = new Scene();

    // crear camab de renderizado
    const renderer = new WebGL1Renderer({
      antialias: true, // evta que se vea pixelado
      canvas: document.getElementById("bg"), // asignamos el canva
    });

    // crear la camara
    const camara = new PerspectiveCamera(
      50, //defecto 50
      window.innerWidth / window.innerHeight, //after ration (tamaño)
      0.1, // desde que atn cerca esta la camara
      1000 // desde que tan lejos esta la camara
    );

    // mover la camara
    camara.position.z = 6;

    // creaar cubo
    const geometria = new BoxGeometry(1, 1, 1); //ancho, alto, profundidad
    const material = new MeshBasicMaterial({ color: 0xffffff }); // textura
    const cubo = new Mesh(geometria, material);

    // crear skybox (las cosas que avnde fondo )
    const skygeomety = new SphereGeometry(360, 25, 25); //tamaño/ num egament tamaño segmento

    const loader = new TextureLoader();
    // caragamos a textura
    const textura = loader.load("/custom-sky.png");
    const material02 = new MeshPhongMaterial({
      map: textura,
    });

    // crear la ilumincacion
    scene.add(new AmbientLight(0xffffff, 0.8)); //luz - intecidad
    scene.add(new HemisphereLight(0xffffff, 0.8)); //luz - intecidad

    const skybox = new Mesh(skygeomety, material02); // creamos el sckibox con textura

    // agregar el skybox a la scena
    scene.add(skybox);
    skybox.material.side = BackSide; // para qeu se vea del aldo reverso

    // agregar cubo
    scene.add(cubo);

    // agregar el tamaño donde se av renderizar
    renderer.setSize(window.innerWidth, window.innerHeight);

    // crear animacion
    function animate() {
      // mover el duvo
      cubo.rotation.x += 0.01;
      cubo.rotation.y += 0.01;

      // dibujar la scena
      renderer.render(scene, camara);

      // avisar el navegador que vamos animar
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas id="bg"></canvas>;
}
