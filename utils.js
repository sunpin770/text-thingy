document.getElementById('attDisplay').innerHTML = "loading utils..."
const attDisplay = document.getElementById('attDisplay');
var sceneCount = 0;
/**
 * Updates the attributes display with the current character attributes.
 */
function setAtt() {
    attDisplay.innerHTML = char.name + "<br/> Skill (" + char.style + "): " + char.att.skill + " <br/>Worldly Experience: " + char.att.exp + " <br/>Interaction Ability: " + char.att.inter + " <br/>Important Items: " + char.att.inven.join(', ');
    document.getElementById('sceneNum').innerHTML = sceneCount;
};

/**
 * Retrieves character attributes from local storage and sets the current scene.
 * @returns {void}
 */
function getAtt() {
    // Fetch character attributes from local storage
    let tempStorageFetch = localStorage.getItem('attributes');

    // Parse the fetched attributes from JSON string to JavaScript object
    var storedAtt = JSON.parse(tempStorageFetch);

    // Assign the parsed attributes to the global character object
    char = storedAtt;

    // Retrieve and set current scene from local storage
    let currentScene = localStorage.getItem('currentScene');
    if (currentScene) {
        // Update the scene display with the retrieved current scene
        writeScene(currentScene);
    }
    // Retrieve and set current scene numberfrom local storage
    let currentSceneNum = localStorage.getItem('currentSceneNum');
    if (currentSceneNum) {
        // Update the scene display with the retrieved current scene number
        sceneCount = currentSceneNum;
    }
}


const scene = document.getElementById('scene');

/**
 * Creates a button element with the given id and text.
 *
 * @param {string} zach - The id for the button.
 * @returns {string} - The HTML string for the button element.
 */
function select(zach) {
    return '<button id="' + zach + '">select</button>';
};

/**
 * Clears all buttons by disabling them.
 *
 * @returns {void}
 */
function clearButtons() {
    // Select all button elements in the document
    const buttons = document.querySelectorAll('button');

    // Iterate over each button and disable it
    buttons.forEach(button => {
        button.disabled = true;
    });
};
/**
 * Writes a new/**
  * Clears all buttons within the scene paragraph by disabling them.
  *
  * @returns {void}
  */
 function clearButtons() {
     // Select all button elements within the scene paragraph
     const buttons = document.querySelectorAll('#scene button');
 
     // Iterate over each button and disable it
     buttons.forEach(button => {
         button.disabled = true;
     });
 }; 
 /* scene to the scene display and updates the attributes.
  Increments the scene count by 1.
 *
 * @param {string} zach - The new scene content to be displayed.
 * @returns {void}
 */
function writeScene(zach) {
    // Call the setAtt function to update the attributes display
    setAtt();

    // Increment the scene count by 1
    sceneCount += 1;

    // Update the scene display with the new scene content
    scene.innerHTML = zach;
};

/**
 * Appends a new scene content to the existing scene display and updates the attributes.
 *
 * @param {string} zach - The new scene content to be appended.
 * @returns {void}
 */
function appendScene(zach) {
    // Call the setAtt function to update the attributes display
    setAtt();

    // Append a line break and the new scene content to the existing scene display
    scene.innerHTML += "<br/>";
    scene.innerHTML += zach;
};

/**
 * Simulates a fight between the character and an opponent.
 * Updates character attributes based on the outcome of the fight.
 *
 * @param {string} adv - The character's advantageous style.
 * @param {string} dis - The character's disadvantageous style.
 * @param {object} fail - An object containing messages for a failed fight.
 * @param {object} win - An object containing messages for a successful fight.
 * @param {number} dfclt - The difficulty level of the fight.
 * @returns {object} - Returns the appropriate message based on the fight outcome.
 */
function fight(adv, dis, fail, win, dfclt) {
    const firstSkill = char.att.skill;
    let state = lose;
    let skill = firstSkill;
    let isAdv = "-";

    // Determine if the character has advantageous or disadvantageous style
    if (char.style == adv) {
        skill += 2;
        isAdv = 'true';
    }
    else if (char.style == dis) {
        skill -= 2;
        isAdv = 'false'
    };

    // Determine the fight outcome based on the character's skill and difficulty level
    if (Math.random() * 10 + Math.random() * 100 % 2 + skill > dfclt) {
        state = 'win';
    };

    // Handle the fight outcome based on the character's style and the outcome
    if (isAdv == "-") {
        if (state == 'win') {
            char.att.skill += Math.random() * 100 % 2;
            return win.null;
        }
        else {
            char.att.exp += Math.random() * 100 % 2;
            return fail.null;
        };
    }
    else if (isAdv == 'true') {
        if (state == 'win') {
            char.att.skill += 1;
            return win.adv;
        }
        else {
            char.att.exp += 2;
            return fail.adv;
        };
    }
    else {
        if (state == 'win') {
            char.att.skill += 1;
            char.att.exp -= 1;
            return win.dis;
        }
        else {
            char.att.exp -= Math.random() * 100 % 2;
        };
    };

    // Update the attributes display after the fight
    setAtt();
};

