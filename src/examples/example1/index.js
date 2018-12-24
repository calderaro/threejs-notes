import {
    PerspectiveCamera,
    Scene,
    BoxGeometry,
    MeshNormalMaterial,
    Mesh,
    WebGLRenderer
  } from 'three'
   
  const camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.z = 3;
  
  const scene = new Scene();
  
  const geometry = new BoxGeometry( 0.2, 0.2, 0.2 );
  const material = new MeshNormalMaterial();
  
  const mesh = new Mesh( geometry, material );
  scene.add( mesh );
  
  const renderer = new WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  document.body.style.padding = 0;
  document.body.style.margin = 0;
  document.body.appendChild( renderer.domElement );

  window.addEventListener('resize', () => {
    const {innerWidth: width, innerHeight: height} = window
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  })
   
  function animate() {
   
      requestAnimationFrame( animate );
   
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
   
      renderer.render( scene, camera );
   
  }
  
  export default animate;