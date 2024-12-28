<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markerless AR with 3D Model</title>
    <!-- CDN for Three.js -->
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
    <!-- CDN for WebXR Polyfill -->
    <script src="https://cdn.jsdelivr.net/npm/webxr-polyfill"></script>
    <!-- CDN for GLTFLoader -->
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/loaders/GLTFLoader.js"></script>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: black; /* For better visibility during debugging */
        }
        button {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="start-ar">Start AR</button>
    <script src="main.js"></script>
</body>
</html>
