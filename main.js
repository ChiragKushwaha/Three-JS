import * as THREE from './js/three.module.js';
import { GUI } from './js/dat.gui.module.js';
import { OrbitControls } from './js/OrbitControls.js';
import Stats from './js/stats.module.js';
import {
  createPlaneLambertMaterial,
  createCubeLambertMaterial,
  createSphereLambertMaterial,
} from './basics-geometry.js';
import { createSpotlight } from './light.js';
import axesHelper from './helper.js';

function init() {
  var scene = new THREE.Scene();

  const fov = 45; // AKA Field of View
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1; // the near clipping plane
  const far = 1000;
  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  var controls = new OrbitControls(camera, renderer.domElement);

  // x - red , y - green, z - blue axis lines
  scene.add(axesHelper(20));

  // Shape Geometry
  const plane = createPlaneLambertMaterial({ receiveShadow: true });
  scene.add(plane);
  const cube = createCubeLambertMaterial({ castShadow: true });
  scene.add(cube);
  const sphere = createSphereLambertMaterial({ castShadow: true });
  scene.add(sphere);

  // Light
  createSpotlight({ scene: scene, x: -40, y: 60, z: -10, castShadow: true });

  controls.enableDamping = true;
  //   controls.autoRotate = true;
  controls.update();

  var stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom);

  var helper = new THREE.GridHelper(2000, 100);
  helper.position.y = -199;
  helper.material.opacity = 0.25;
  helper.material.transparent = true;
  scene.add(helper);

  let step = 0;
  let rSpeed = 0;
  // GUI
  var params = new (function () {
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
  })();

  var gui = new GUI();
  var folder = gui.addFolder('one');
  folder.add(params, 'rotationSpeed', 0, 0.5);
  folder.add(params, 'bouncingSpeed', 0, 0.5);
  document.body.appendChild(stats.dom);

  function render() {
    stats.update();
    controls.update();

    step += params.bouncingSpeed;
    rSpeed = params.rotationSpeed;

    cube.rotation.x += rSpeed;
    cube.rotation.y += rSpeed;
    cube.rotation.z += rSpeed;

    sphere.position.x = 20 + 10 * Math.cos(step);
    sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
  document.getElementById('c').appendChild(renderer.domElement);
}
window.onload = init;
