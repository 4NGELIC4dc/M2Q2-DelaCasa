// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometries
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x53cfda });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(-4, 0, 0);

const coneGeometry = new THREE.ConeGeometry();
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff3747 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(0, 0, 0);

const cylinderGeometry = new THREE.CylinderGeometry();
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff7994 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(4, 0, 0);

const sphereGeometry = new THREE.SphereGeometry();
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffc900 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 3, 0);

const torusGeometry = new THREE.TorusGeometry();
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x00c3af });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(0, -3, 0);

scene.add(box, cone, cylinder, sphere, torus);

const sizeFactors = {
    box: 1,
    cone: 1.50,
    cylinder: 0.75,
    sphere: 0.50,
    torus: 0.50,
};

// Animation
const animate = () => {
    requestAnimationFrame(animate);

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    cone.rotation.x += 0.02;
    cone.rotation.y += 0.02;
    cylinder.rotation.x += 0.03;
    cylinder.rotation.y += 0.03;
    sphere.rotation.x += 0.04;
    sphere.rotation.y += 0.04;
    torus.rotation.x += 0.05;
    torus.rotation.y += 0.05;

    box.scale.set(sizeFactors.box, sizeFactors.box, sizeFactors.box);
    cone.scale.set(sizeFactors.cone, sizeFactors.cone, sizeFactors.cone);
    cylinder.scale.set(sizeFactors.cylinder, sizeFactors.cylinder, sizeFactors.cylinder);
    sphere.scale.set(sizeFactors.sphere, sizeFactors.sphere, sizeFactors.sphere);
    torus.scale.set(sizeFactors.torus, sizeFactors.torus, sizeFactors.torus);

    renderer.render(scene, camera);
};

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();
