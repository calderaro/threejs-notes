import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
  MeshBasicMaterial,
  MeshFaceMaterial,
  DoubleSide,
  TextureLoader
} from 'three'
 
const width = window.innerWidth
const height = window.innerHeight
const camera = new PerspectiveCamera( 70, width / height, 0.01, 1000 );
camera.position.z = 3;

const scene = new Scene();

const geometry = new BoxGeometry(1, 1, 1);
const cubeMaterials = [
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
  new MeshBasicMaterial({ map: new TextureLoader().load('static/dirt.jpg'), side: DoubleSide }),
]
const mesh = new Mesh( geometry, cubeMaterials );
scene.add( mesh );

const renderer = new WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );

document.body.style.width = '100%';
document.body.style.height = '100vw';
document.body.style.padding = 0;
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );

/*
window.addEventListener('resize', () => {
  const {innerWidth: width, innerHeight: height} = window
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})
*/
 
function animate() {
 
    console.log('animate')
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}

export default animate;