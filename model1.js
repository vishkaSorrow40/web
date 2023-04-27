// import * as THREE from "https://unpkg.com/three/build/three.module.js";
// import { default as Stats } from "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js";


const scene = new THREE.Scene();
const clock = new THREE.Clock();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
const cameraTarget = new THREE.Vector3(-1, 0.4, 1);

const divThreejs = document.querySelector('.threejs')
renderer.setSize( divThreejs.offsetWidth, divThreejs.offsetHeight );

document.forms[0].addEventListener('change', (e) => {
    mesh.material.color.set(e.target.value);
})

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    camera.aspect = divThreejs.clientWidth / divThreejs.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(divThreejs.clientWidth, divThreejs.clientHeight);
}

divThreejs.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;

// document.forms[0].addEventListener('change', (e) => {
//     mesh.material.color.set(e.target.value);
// })



const geometry = new THREE.BoxGeometry(2,2,1)
const material = new THREE.MeshPhongMaterial( { color: 0xfee1fff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
let mesh = new THREE.Mesh(geometry, material);
cube.position.set(-3, 1, -4);
cube.rotation.set(0,1,0);
cube.castShadow=true;
cube.receiveShadow = true;


const geometryPyramid = new THREE.BufferGeometry();
const verticesPyramid = new Float32Array([
    //основание пирамиды
    -0.8, 0, 0.8,
    0.8, 0, 0.8,
    0.8, 0, -0.8,
    -0.8, 0, -0.8,
    //вершина пирамиды
    0, 2, 0
]);
const indicesPyramid = new Uint32Array([

    0, 1, 4,
    1, 2, 4, 
    2, 3, 4,
    3, 0, 4 
]);
geometryPyramid.setAttribute('position', new THREE.BufferAttribute(verticesPyramid, 3));
geometryPyramid.setIndex(new THREE.BufferAttribute(indicesPyramid, 1));
geometryPyramid.computeVertexNormals();

const materialPyramid = new THREE.MeshPhongMaterial({ color: '#0562F8' });

const pyramid = new THREE.Mesh(geometryPyramid, materialPyramid);
pyramid.position.set(-1, 0, 1);
scene.add(pyramid);
pyramid.receiveShadow = true;
pyramid.castShadow = true;
document.forms[0].addEventListener('change', (e) => {
    materialPyramid.color.set(e.target.value);
});


const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(4000, 4000),
    new THREE.MeshPhongMaterial({ color: 0x008080, dithering: true })
  );
  plane.rotation.x = - Math.PI / 2;
  plane.receiveShadow = true;
  scene.add(plane);
  

  const plane2Geometry = new THREE.BufferGeometry();
  const plane2Width = 50;
  const plane2Height = 30;
  const plane2Vertices = new Float32Array([
      -plane2Width/2,0,0,
      plane2Width/2,0,0,
      -plane2Width/2, plane2Height, 0,
      plane2Width/2, plane2Height, 0
  ])
  

const spotLight = new THREE.SpotLight("#FFFFFF");
spotLight.position.set(3, 3, 3);
spotLight.castShadow = true;
spotLight.intensity = 2;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 25;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
spotLight.shadow.bias = -0.01;
spotLight.target.position.set(0, 0, 0);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
 scene.add(spotLight);
 scene.add(spotLight.target);
 scene.add(spotLightHelper);
 scene.add(cube);


 const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
 const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x7add40 });
 const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 sphere.position.y = 1;
 sphere.position.x=1;
 scene.add(sphere);
sphere.castShadow = true;

 scene.background = new THREE.Color('#a7bB7e');
camera.position.z = 5;
camera.position.y = 1;


plane2Geometry.setAttribute('position', new THREE.BufferAttribute(plane2Vertices, 3));
plane2Geometry.computeVertexNormals();
const plane2Material = new THREE.MeshPhongMaterial({color: '#ff4a0b'});
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
plane2.receiveShadow = true;

plane2.rotation.y = - Math.PI / 0.15;
plane2.position.z = 15;
scene.add(plane2);




const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-20, 10, -5);
directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 2000; // default
directionalLight.shadow.mapSize.height = 2000; // default
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = - 10;
directionalLight.shadow.camera.left = - 10;
directionalLight.shadow.camera.right = 10;
scene.add(directionalLight);
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(directionalLightHelper);
document.getElementById('direct').addEventListener('change', function(){
    if(this.checked){
        directionalLight.intensity = 1;
    }
    else{
        directionalLight.intensity = 0;
    }
});


const pointerLight = new THREE.PointLight(0xfffaaf, 1, 100)
pointerLight.position.set(0, 7, -8);
pointerLight.castShadow = true;

pointerLight.shadow.mapSize.width = 2000; // default
pointerLight.shadow.mapSize.height = 2000; // default
pointerLight.shadow.camera.top = 10;
pointerLight.shadow.camera.bottom = - 10;
pointerLight.shadow.camera.left = - 10;
pointerLight.shadow.camera.right = 10;
scene.add(pointerLight);
const pointerLightHelper = new THREE.PointLightHelper(pointerLight);
scene.add(pointerLightHelper);
document.getElementById('point').addEventListener('change', function(){
    if(this.checked){
        pointerLight.intensity = 1;
    }
    else{
        pointerLight.intensity = 0;
    }
});

function animate() {
    requestAnimationFrame(animate);

    render();

}
function render() {
    requestAnimationFrame( render );
    cube.rotation.y+=0.001;

    const elapsedTime = clock.getElapsedTime()

    camera.position.x = Math.cos(elapsedTime * 0.4) * 7;
    camera.position.z = Math.sin(elapsedTime * 0.4) * 7;

    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);
   
};


animate();

// const stats = Stats();
// document.body.appendChild(stats.dom);

// let vertices = [0, 0, 0, 10, 0, 0, 10, 0, 10, 0, 0, 10];

// let indices = [2, 1, 0, 0, 3, 2];

// let cameraTarget = new THREE.Vector3(0, 0.4, 0);

// let geometry = new THREE.BufferGeometry();

// geometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(new Float32Array(vertices), 3)
// );
// geometry.setIndex(indices);
// geometry.computeVertexNormals();

// let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

// let mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(-5, 0, -5);

// const spotLight = new THREE.SpotLight("#ffffff");
// spotLight.position.set(2, 2, 2);
// spotLight.castShadow = true;
// spotLight.intensity = 2;
// spotLight.shadow.camera.near = 1;
// spotLight.shadow.camera.far = 25;
// spotLight.shadow.mapSize.width = 2048;
// spotLight.shadow.mapSize.height = 2048;
// spotLight.shadow.bias = -0.01;
// spotLight.target.position.set(0, 0, 0);

// const spotLightHelper = new THREE.SpotLightHelper(spotLight);
//  scene.add(spotLight);
//  scene.add(spotLight.target);
//  scene.add(spotLightHelper);
//  scene.add(mesh);



// let camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 1, 5);
// // camera.position.z = 5;
// // camera.position.y = 1;

// let renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

//  function animate() {
//    requestAnimationFrame(animate);

//    stats.update();
//    spotLightHelper.update();

//    const elapsedTime = clock.getElapsedTime();

//    camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
//    camera.position.z = Math.sin(elapsedTime * 0.5) * 2;
//     camera.lookAt(cameraTarget);

//     renderer.render(scene, camera);
// }

//  animate();








// const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
// const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xf00f00 });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);

// let vertices = [
// 	new THREE.Vector3(1,3,1),
// 	new THREE.Vector3(1,3,-1),
// 	new THREE.Vector3(1,-1,1),
// 	new THREE.Vector3(1,-1,-1),
// 	new THREE.Vector3(-1,3,-1),
// 	new THREE.Vector3(-1,3,1),
// 	new THREE.Vector3(-1,-1,-1),
// 	new THREE.Vector3(-1,-1,1)
// 	];
// let faces = [
// 	new THREE.Face3(0,2,1),
// 	new THREE.Face3(2,3,1),
// 	new THREE.Face3(4,6,5),
// 	new THREE.Face3(6,7,5),
// 	new THREE.Face3(4,5,1),
// 	new THREE.Face3(5,0,1),
// 	new THREE.Face3(7,6,2),
// 	new THREE.Face3(6,3,2),
// 	new THREE.Face3(5,7,0),
// 	new THREE.Face3(7,2,0),
// 	new THREE.Face3(1,3,4),
// 	new THREE.Face3(3,6,4),
// 	];
// let geom = new THREE.Geometry();
// geom.vertices = vertices;
// geom.faces = faces;
// geom.computeCentroids();
// geom.mergeVertices();

// let sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// mesh.position.set(-4, 0, -4);