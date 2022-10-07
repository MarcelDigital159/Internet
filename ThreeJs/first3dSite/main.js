import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer =  new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-3);


renderer.render( scene, camera );

// TORUS

const geometry = new THREE.TorusGeometry( 10, 3, 16, 89)
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347 } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

// Lights

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)


//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z ] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star)
}

Array(250).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('IMG_3170.JPG');
scene.background = spaceTexture;

// Avatar
const marcelTexture = new THREE.TextureLoader().load('Marcel Theory (2).png');

const marcel = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: marcelTexture})
);

scene.add(marcel);


//Moon-Night
const nightTexture = new THREE.TextureLoader().load('nightsky.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const night = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: nightTexture,
    normalMap: normalTexture,
  })
);

scene.add(night);

night.position.z = 30;
night.position.setX(-10);

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  marcel.rotation.y += 0.01;
  marcel.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}




//render automatically
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.02;
  torus.rotation.y += 0.006;
  torus.rotation.z += 0.02;


  controls.update();


  renderer.render( scene, camera );
}

animate()