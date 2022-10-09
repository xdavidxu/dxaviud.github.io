import {
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  IcosahedronGeometry,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
} from "three";
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

const geometry = new IcosahedronGeometry();
const material = new MeshPhongMaterial({
  color: parseInt(primaryColor().substring(2), 16),
});
const icosahedron = new Mesh(geometry, material);
scene.add(icosahedron);

const color = 0xffffff;
const intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(-2, 2, 3);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  icosahedron.rotation.x += 0.008;
  icosahedron.rotation.y += 0.008;

  renderer.render(scene, camera);
}

animate();

export const resetMaterialColor = () => {
  material.setValues({ color: primaryColor() });
};
