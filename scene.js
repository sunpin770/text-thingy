document.getElementById('attDisplay').innerHTML = "loading scenes..."
function scene1() {
    writeScene('<input type="text" id="name" placeholder="Enter your name"><br/>To continue, choose the fighting style you would like to play as:<br/><br/>1. Axewielder: <br/>you use heavy weapons, such as axes and clubs. You sometimes have trouble hitting dexterious foes. <button onclick="resolve1()">select</button><br/><br/>2. Swordsman: <br/>Your reliable skill in swordplay allows you to consistently hit your attackers, but occasionally long fights against hardy foes wear you out.<button onclick="resolve2()">select</button><br/><br/>3. Archer: <br/>You can easily take on ranged battles, but are lost in melee combat. <button onclick="resolve3()">select</button><br/><br/>4. Wizard: <br/>You have quarterstaff to fight with and a limited amount of magic that gives you advantage in combat. Using it drains your energy severly, so use caution.<button onclick="resolve4()">select</button><br/><br/>5. Stabber: Your dagger reliably stabs things you sneak up on, but when you do not have the advantage of surprise, you have a much harder time.<button onclick="resolve5()">select</button>');
}

function scene2() {
    writeScene('Choose your quest! <br/>1. The Forest of Mystery <button onclick="scene3()">select</button><br/><br/>2. Uncovering the Depths <button disabled>Coming Soon!</button>');
}

function scene3() {
    writeScene(`The Forest of Mystery lies just west of your town. Many have entered, and truly, many come out. Of them, some have given horrifying tales of villians and evil lurking within, while others claim it is all myth. Either way, no one has ever mapped or given landmarks to it that you can find. <br/><br/>Would you like to bravely adventure forward? <br/><button onclick="scene7()">select</button><br/>Or does caution tell you to ask your old teacher for advice? <br/><button onclick="resolve6()">select</button><br/>Or do you want to stay home and not adventure?<br/><button onclick="alert('Why are you even playing this?')">select</button>`);
}

function scene4(style) {
    writeScene(`You come to the house of the old warrior who imparted the skill of being a ${style} to you. "Welcome, ${char.name}," he tells you warmly. <br/> "The forest, you ask? In my youth I've heard many legends. They always warned of touching glowing weapons on the ground. Other than that, I can't recall. <button onclick="scene7()">continue</button>`);
}

function scene5() {
    writeScene(`You make the treacherous journey to the old wizard's home, a small tower atop a mountain. When you enter, he laughs. "So, you finally decided to explore that forest? Figures you'd come here. I have a map passed down in the family for generations. You should memorize it this well," he adds, holding out a map. <br/><img src="img/map1.png"/><br/>If you'r done memorizing the map, it's time to go explore the forest! <button onclick="scene7()">select</button><br/>Otherwise, stay here and stare at it forever.`)
}

function scene6() {
    writeScene(`Your master, the great assasin, lives in a little hovel, the outside betraying none of the immense riches hidden within.<br/>When you enter, it's empty.<br/>Suddenly, from the entranceway behind you, the hooded form of your master appears. He lunges toward you on impulse, not realizing it's you.<br/>You can now either dodge and make him realize it's you <button onclick="clearButtons(); appendScene(fight1.escape)">select</button>, or you can draw your own dagger and test your skills. <button onclick="clearButtons(); appendScene(fight(null, null, fight1.win, fight1.lose, 6))">select</button>`)
}
