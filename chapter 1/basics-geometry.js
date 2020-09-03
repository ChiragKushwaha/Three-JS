import * as THREE from '../js/three.module.js';

// BASIC MATERIAL START //
export function createPlaneBasicMaterial() {
  var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  return plane;
}
export function createCubeBasicMaterial({ wireframe = false }) {
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: wireframe,
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  return cube;
}

export function createSphereBasicMaterial({ wireframe = false }) {
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: wireframe,
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  return sphere;
}
// BASIC MATERIAL END //

// LAMBERT MATERIAL START //
export function createPlaneLambertMaterial({
  wireframe = false,
  receiveShadow = false,
}) {
  var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcccccc,
    wireframe: wireframe,
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = receiveShadow;
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  return plane;
}
export function createCubeLambertMaterial({
  wireframe = false,
  castShadow = false,
}) {
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    wireframe: wireframe,
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = castShadow;
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  return cube;
}

export function createSphereLambertMaterial({
  wireframe = false,
  castShadow = false,
}) {
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
    wireframe: wireframe,
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = castShadow;
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  return sphere;
}
// LAMBERT MATERIAL END //
