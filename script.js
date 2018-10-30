var userCount = 0;
var cpuCount = 0;

document.getElementById('pierre').addEventListener("click", function() {
    var userChoice = 1;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Pierre.png')";
    var iaChoice = cpuGame();
    regle(iaChoice, userChoice);
});

document.getElementById('feuille').addEventListener("click", function() {
    var userChoice = 2;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Feuille.png')";
    var iaChoice =cpuGame();
    regle(iaChoice, userChoice);
});

document.getElementById('ciseau').addEventListener("click", function() {
    var userChoice = 3;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Ciseau.png')";
    var iaChoice =cpuGame();
    regle(iaChoice, userChoice);
});

function cpuGame() {
    var xc = Math.floor(Math.random() * 3) + 1;
    switch(xc) {
        case 1:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Pierre.png')";
            return 1;
            break;
        case 2:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Feuille.png')";
            return 2;
            break;
        case 3:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Ciseau.png')";
            return 3;
            break;
        default:
            console.log("fuck !");
            return 0;
            break;
    }
}

function regle(cpu, user) {
    switch(cpu) {
        case 1:
            if (user == 1) {
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>Draw Game !</h1>";
            }
            if (user == 2) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>La feuille emballe la pierre !</h1>";
            }
            if (user == 3) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>La pierre casse les ciseaux !</h1>";
            }
            break;
        case 2:
            if (user == 1){
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>La feuille emballe la pierre !</h1>";
            }
            if (user == 2) {
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>Draw Game !</h1>";
            }
            if (user == 3) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>Les ciseaux découpe la feuille !</h1>";
            }
            break;
        case 3:
            if (user == 1) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>La pierre casse les ciseaux !</h1>";
            }
            if (user == 2) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>Les ciseaux découpe la feuille !</h1>";
            }
            if (user == 3) {
                document.getElementById('cpu-score').innerHTML = cpuCount;
                document.getElementById('user-score').innerHTML = userCount;
                document.getElementById('footer').innerHTML = "<h1>Draw Game !</h1>";
            }
            break;

         default:
             console.log("fuck !");
             break;
    }
}












function Jeu(cpu, user) {


}