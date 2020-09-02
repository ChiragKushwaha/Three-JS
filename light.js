import * as THREE from './js/three.module.js';

export function createSpotlight({ scene, x, y, z, castShadow }) {
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(x, y, z);
  spotLight.castShadow = castShadow;
  scene.add(spotLight);
}
