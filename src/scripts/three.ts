import {
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  IcosahedronGeometry,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { primaryColor } from "./css-vars";

// https://stackoverflow.com/a/986977
function getScrollBarWidth() {
  var inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

const width = () => window.innerWidth - getScrollBarWidth();
const height = () => window.innerHeight;

window.addEventListener("resize", () => {
  camera.aspect = width() / height();
  camera.updateProjectionMatrix();
  renderer.setSize(width(), height());
});

const scene = new Scene();
const camera = new PerspectiveCamera(75, width() / height(), 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(width(), height());
document.body.prepend(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const geometry = new IcosahedronGeometry(1, 0);
const material = new MeshPhongMaterial({ color: primaryColor() });
const mesh = new Mesh(geometry, material);
scene.add(mesh);

const color = 0xffffff;
const light1 = new DirectionalLight(color, 1);
const light2 = new DirectionalLight(color, 0.3);
const light3 = new DirectionalLight(color, 0.1);
light1.position.set(-3, 3, 3);
light2.position.set(3, -3, 1);
light3.position.set(2, 2, -3);
scene.add(light1);
scene.add(light2);
scene.add(light3);

camera.position.z = 5;
controls.update();

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.008;
  mesh.rotation.y += 0.008;

  controls.update();

  renderer.render(scene, camera);
}

animate();

export const resetMaterialColor = () => {
  material.setValues({ color: primaryColor() });
};
