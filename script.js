var userCount = 0;
var cpuCount = 0;

var username = prompt('Entrez votre nom :', 'Visiteur');
if (username == '') {
    username = 'Visiteur';
}

document.getElementById('user-score').innerHTML = username;

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
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "Egalité !";
            }
            if (user == 2) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>La feuille emballe la pierre !";
            }
            if (user == 3) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'ordinateur gagne !<br>La pierre casse les ciseaux !";
            }
            break;
        case 2:
            if (user == 1){
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'odinateur gagne !<br>La feuille emballe la pierre !";
            }
            if (user == 2) {
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "Egalité !";
            }
            if (user == 3) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>Les ciseaux découpe la feuille !";
            }
            break;
        case 3:
            if (user == 1) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>La pierre casse les ciseaux !";
            }
            if (user == 2) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'ordinateur gagne !<br>Les ciseaux découpe la feuille !";
            }
            if (user == 3) {
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "Egalité !";
            }
            break;

         default:
             console.log("fuck !");
             break;
    }
}