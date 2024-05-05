// init.js
setAtt();
document.getElementById('start').innerHTML = `
<button onclick="scene1();" id="q">New Game</button>
<button onclick="getAtt(); setAtt();" id="w">Load Game</button>
<button onclick="saveGame();">Save Game</button>`;

// Add this function to save the game state
function saveGame() {
    localStorage.setItem('attributes', JSON.stringify(char));
    localStorage.setItem('currentScene', scene.innerHTML); // Save current scene
    localStorage.setItem('currentSceneNum', sceneCount);
    alert('Game saved successfully!');
}

