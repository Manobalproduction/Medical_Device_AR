let scene, camera, renderer;
let arSession = null;

const startButton = document.getElementById("start-ar");

startButton.addEventListener("click", async () => {
    if (navigator.xr) {
        try {
            // Request AR session
            const session = await navigator.xr.requestSession("immersive-ar", {
                requiredFeatures: ["hit-test"],
            });
            arSession = session;

            // Initialize Three.js scene
            setupThreeJS();
            setupAR();
        } catch (error) {
            console.error("Failed to start AR session:", error);
            alert("AR session failed. Ensure your device supports WebXR.");
        }
    } else {
        alert("WebXR not supported on this browser or device.");
    }
});

function setupThreeJS() {
    // Create the scene
    scene = new THREE.Scene();

    // Create the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;

    // Append renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

function setupAR() {
    // Add AR session to renderer
    renderer.xr.setSession(arSession);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load(
        'model.glb', // Path to your 3D model
        (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 0, -0.5); // Position the model 0.5 meters in front of the user
            model.scale.set(0.2, 0.2, 0.2); // Scale the model down if needed
            scene.add(model);
        },
        undefined,
        (error) => {
            console.error('An error occurred while loading the model:', error);
        }
    );

    // Start the render loop
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
