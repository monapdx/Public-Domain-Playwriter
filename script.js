// Function to duplicate scenes and remove dialogue
function duplicateScenes() {
    let screenplay = document.getElementById('screenplayInput').value.trim();
    let scenes = screenplay.split(/Act\s+\d+,\s+scene\s+\d+/);

    let output = '';
    scenes.forEach((scene, index) => {
        scene = scene.trim();
        if (scene) {
            output += `<div class="sceneContainer">`;
            output += `<h2>Act ${index + 1}, Scene ${index + 1}</h2>`;
            output += `<pre>${scene}</pre>`;
            output += `</div>`;
            output += `<div class="sceneContainer">`;
            output += `<h2>Act ${index + 1}, Scene ${index + 1} (Modernized)</h2>`;
            output += `<pre>${scene.replace(/(\b[A-Z][A-Z]+\b):.*$/gm, '$1:')}</pre>`;
            output += `</div>`;
        }
    });

    document.getElementById('output').innerHTML = output;
}

// Event listeners
document.getElementById('duplicateScenesBtn').addEventListener('click', duplicateScenes);

// Additional functions and event listeners for saving changes, etc.
