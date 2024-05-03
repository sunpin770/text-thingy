function resolve1() {
    char.name = document.getElementById('name').value;
    char.style = "Axewielder";
    char.att.skill += 2;
    char.att.inven = ["axe", "mail armor"];
    scene2();
};

function resolve2() {
    char.name = document.getElementById('name').value;
    char.style = "Swordsman";
    char.att.skill += 2;
    char.att.inven = ["rapier", "shield"];
    scene2();
};

function resolve3() {
    char.name = document.getElementById('name').value;
    char.style = "Archer";
    char.att.skill += 2;
    char.att.inven = ["shortbow"];
    scene2();
};

function resolve4() {
    char.name = document.getElementById('name').value;
    char.style = "Wizard";
    char.att.skill += 1;
    char.att.inven = ["quarterstaff"];
    scene2();
};

function resolve5() {
    char.name = document.getElementById('name').value;
    char.style = "Stabber";
    char.att.skill += 1 + Math.random() % 2;
    char.att.inven = ["dagger"];
    scene2();
};

function resolve6() {
    if (char.style == 'Axewielder' || char.style =='Swordsman' || char.style == 'Archer') {
        scene4(char.style);
    }
    else if (char.style == 'Wizard') {
        scene5();
    }
    else {
        scene6();
    }
}