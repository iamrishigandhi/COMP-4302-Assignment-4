import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add objects to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Initial color
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lighting
const lightTop = new THREE.DirectionalLight(0xffffff, 1000);
const lightLeft = new THREE.DirectionalLight(0x00ffff, 1000);
const lightRight = new THREE.DirectionalLight(0xff00ff, 1000);
scene.add(lightTop);
scene.add(lightLeft);
scene.add(lightRight);

// Set initial light positions
const lightTopPos = new THREE.Vector3(0, 5, 0);
const lightLeftPos = new THREE.Vector3(-5, 0, 0);
const lightRightPos = new THREE.Vector3(5, 0, 0);
lightTop.position.copy(lightTopPos);
lightLeft.position.copy(lightLeftPos);
lightRight.position.copy(lightRightPos);

// Moving point light source
const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
scene.add(pointLight);

// Create a 3D model to represent the point light
const pointLightGeometry = new THREE.SphereGeometry(0.2);
const pointLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const pointLightMesh = new THREE.Mesh(pointLightGeometry, pointLightMaterial);
scene.add(pointLightMesh);

// Animate the point light position
let time = 0;
function animatePointLight() {
    const amplitude = 2;
    const frequency = 0.5;
    const displacement = new THREE.Vector3(
        0,
        amplitude * Math.sin(frequency * time),
        0
    );
    pointLight.position.add(displacement);
    pointLightMesh.position.copy(pointLight.position);
    time += 0.1;
}

// Set up controls for light positioning and toggling
document.addEventListener("keydown", function (event) {
    if (event.key === "t" || event.key === "T") {
        lightTop.visible = !lightTop.visible;
    } else if (event.key === "l" || event.key === "L") {
        lightLeft.visible = !lightLeft.visible;
    } else if (event.key === "r" || event.key === "R") {
        lightRight.visible = !lightRight.visible;
    }
});

// Set up GUI for light controls
const gui = new GUI();
const lightControls = gui.addFolder("Light Controls");
lightControls.add(lightTop, "visible").name("Top Light").setValue(true);
lightControls.add(lightLeft, "visible").name("Left Light").setValue(true);
lightControls.add(lightRight, "visible").name("Right Light").setValue(true);

// Set up ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Default intensity: 0.3
scene.add(ambientLight);

// Set up GUI for ambient light intensity
const ambientLightControls = gui.addFolder("Ambient Light Controls");
ambientLightControls.add(ambientLight, "intensity", 0, 1).name("Intensity");

// Position camera
camera.position.z = 5;

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Shading modes
const shadingModes = {
    "Flat Shading": THREE.FlatShading,
    "Smooth Shading (Gouraud)": THREE.SmoothShading,
    "Phong Shading": THREE.PhongShading,
};
let currentShadingMode = THREE.PhongShading; // Default shading mode

// Function to update material shading mode
function updateShadingMode(mode) {
    cube.material.shading = mode;
    cube.material.needsUpdate = true;
}

// Event listener for shading mode switching
document.addEventListener("keydown", function (event) {
    if (event.key === "f" || event.key === "F") {
        updateShadingMode(THREE.FlatShading);
    } else if (event.key === "g" || event.key === "G") {
        updateShadingMode(THREE.SmoothShading);
    } else if (event.key === "h" || event.key === "H") {
        updateShadingMode(THREE.PhongShading);
    }
});

// GUI for shading mode switching
const shadingFolder = gui.addFolder("Shading Modes");
shadingFolder.add(
    {
        "Flat Shading": () => {
            updateShadingMode(THREE.FlatShading);
        },
    },
    "Flat Shading"
);
shadingFolder.add(
    {
        "Smooth Shading (Gouraud)": () => {
            updateShadingMode(THREE.SmoothShading);
        },
    },
    "Smooth Shading (Gouraud)"
);
shadingFolder.add(
    {
        "Phong Shading": () => {
            updateShadingMode(THREE.PhongShading);
        },
    },
    "Phong Shading"
);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    animatePointLight();
}
animate();