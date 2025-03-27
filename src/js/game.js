import * as BABYLON from "@babylonjs/core";

// Get canvas element
const canvas = document.getElementById("renderCanvas");

// Create Babylon engine
const engine = new BABYLON.Engine(canvas, true);

// Create scene
const scene = new BABYLON.Scene(engine);

// Camera (ArcRotateCamera)
const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Light (Hemispheric light)
new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// Player (simple sphere)
const player = BABYLON.MeshBuilder.CreateSphere("player", { diameter: 1 }, scene);
player.position = new BABYLON.Vector3(0, 0, 0); // Set initial player position

// Array to store snapshots of player state
let timeStack = [];
const REWIND_LIMIT = 60; // Maximum rewind frames

// Function to record the player's position and rotation at each frame
function recordSnapshot() {
    timeStack.push({
        position: player.position.clone(),
        rotation: player.rotation.clone()
    });

    // Limit the number of snapshots stored (e.g., max 60 frames)
    if (timeStack.length > REWIND_LIMIT) timeStack.shift();
}

// Function to rewind player to last snapshot
function rewind() {
    if (timeStack.length === 0) return; // No snapshots to rewind to
    const snapshot = timeStack.pop();
    player.position = snapshot.position;
    player.rotation = snapshot.rotation;
}

// Record the player's state before every render
scene.registerBeforeRender(() => recordSnapshot());

// Rewind when the "R" key is pressed
window.addEventListener("keydown", (evt) => {
    if (evt.key === "r") rewind();
});

// ✅ Add Guard
const guard = BABYLON.MeshBuilder.CreateBox("guard", { size: 1 }, scene);
guard.position = new BABYLON.Vector3(5, 0, 0);

// ✅ Patrol Logic
let patrolDirection = 1;
scene.registerBeforeRender(() => {
    guard.position.x += 0.01 * patrolDirection; // Moves back and forth
    if (guard.position.x > 5) patrolDirection = -1;
    if (guard.position.x < -5) patrolDirection = 1;
});

// ✅ Update Rewind Meter
const rewindMeter = document.getElementById("rewindMeter");
function updateMeter() {
    const percent = (timeStack.length / REWIND_LIMIT) * 100;
    rewindMeter.style.width = `${percent}%`;
}
scene.registerBeforeRender(updateMeter);

// Render loop (to run the scene)
engine.runRenderLoop(() => {
    scene.render();
});