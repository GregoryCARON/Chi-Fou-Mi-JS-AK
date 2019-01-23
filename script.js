let userCount = 0;
let cpuCount = 0;
let akSndGame = 'ak-snd-game.mp3';
let akSndFail = 'ak-snd-fail.mp3';
let akSndWin = 'ak-snd-win.mp3';

let username = prompt('Entrez votre nom :', 'Visiteur');
if (username === '') {
    username = 'Visiteur';
}

document.getElementById('user-score').innerHTML = username;

document.getElementById('pierre').addEventListener("click", function() {
    let userChoice = 1;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Pierre.png')";
    let iaChoice = cpuGame();
    regle(iaChoice, userChoice);
});

document.getElementById('feuille').addEventListener("click", function() {
    let userChoice = 2;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Feuille.png')";
    let iaChoice =cpuGame();
    regle(iaChoice, userChoice);
});

document.getElementById('ciseau').addEventListener("click", function() {
    let userChoice = 3;
    document.getElementById("img-user-choice").style.backgroundImage = "url('images/Ciseau.png')";
    let iaChoice =cpuGame();
    regle(iaChoice, userChoice);
});

function cpuGame() {
    let xc = Math.floor(Math.random() * 3) + 1;
    let resultat = 0;
    switch(xc) {
        case 1:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Pierre.png')";
            resultat =  1;
            break;
        case 2:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Feuille.png')";
            resultat = 2;
            break;
        case 3:
            document.getElementById("img-cpu-choice").style.backgroundImage = "url('images/Ciseau.png')";
            resultat = 3;
            break;
        default:
            console.log("fuck !");
            resultat = 0;
            break;
    }
    return resultat;
}

function regle(cpu, user) {
    switch(cpu) {
        case 1:
            if (user === 1) {
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "Egalité !";
            }
            if (user === 2) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>La feuille emballe la pierre !";
                lecture(akSndWin, 1, 0);
            }
            if (user === 3) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'ordinateur gagne !<br>La pierre casse les ciseaux !";
                lecture(akSndFail, 1, 0);
            }
            break;
        case 2:
            if (user === 1){
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'odinateur gagne !<br>La feuille emballe la pierre !";
                lecture(akSndFail, 1, 0);
            }
            if (user === 2) {
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "Egalité !";
            }
            if (user === 3) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>Les ciseaux découpe la feuille !";
                lecture(akSndWin, 1, 0);
            }
            break;
        case 3:
            if (user === 1) {
                userCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = username + " gagne !<br>La pierre casse les ciseaux !";
                lecture(akSndWin, 1, 0);
            }
            if (user === 2) {
                cpuCount++;
                document.getElementById('cpu-score').innerHTML = 'CPU<br>' + cpuCount;
                document.getElementById('user-score').innerHTML = username + '<br>' + userCount;
                document.getElementById('footer').innerHTML = "L'ordinateur gagne !<br>Les ciseaux découpe la feuille !";
                lecture(akSndFail, 1, 0);
            }
            if (user === 3) {
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
lecture('toto.mp3', 1, 0);

function lecture(mp3, vol, loop) {
    let snd = new Audio();
    snd.src = mp3;
    snd.loop = loop;
    snd.volume = vol;
    snd.play();
}