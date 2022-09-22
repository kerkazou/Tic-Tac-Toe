
localStorage.clear();

let a;
localStorage.setItem('a', 0);
localStorage.setItem('winner', 0);
localStorage.setItem('win_player_1', 0);
localStorage.setItem('win_player_2', 0);

const win = document.getElementById('win');
const player_win = document.getElementById('player_win');
const home = document.getElementById('home');
const play = document.getElementById('play');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player_1 = document.querySelector('#player_1');
const player_2 = document.querySelector('#player_2');
const another_match = document.querySelector('#another_match');
const name_player_1 = document.querySelector('.name_player_1');
const name_player_2 = document.querySelector('.name_player_2');
const win_player_1 = document.querySelector('.win_player_1');
const win_player_2 = document.querySelector('.win_player_2');

btnAnotherMatch();
win.style.display = "none";

function Start(){
    if(player1.value == ""){
        player1.style.border = "red 2px solid";
    }else{
        player1.style.border = "green 2px solid";
    }
    if(player2.value == ""){
        player2.style.border = "red 2px solid";
    }else{
        player2.style.border = "green 2px solid";
    }

    if((player1.value != "") && (player2.value != "")){
        document.querySelector('.btn-close').click();
        
        localStorage.setItem('player_1' , player1.value);
        localStorage.setItem('player_2' , player2.value);

        selectPlayer();
        
        name_player_1.innerHTML = localStorage.getItem('player_1');
        name_player_2.innerHTML = localStorage.getItem('player_2');
        win_player_1.innerHTML = localStorage.getItem("win_player_1");
        win_player_2.innerHTML = localStorage.getItem("win_player_2");
        
        home.style.display = "none";
        play.style.display = "flex";
    }
}

function chose(p) {
    if((document.getElementById(p).innerHTML == "") && (localStorage.getItem('winner') == 0)){
        a = localStorage.getItem("a");
        localStorage.setItem("a", ++a);
        if(checkPlayer(localStorage.getItem("a"))){
            document.getElementById(p).innerHTML = '<i class="bi bi-x-lg" style="color: #D21BEF;"></i>';
            player_1.style.backgroundColor = "#EFEC1B";
            player_2.style.backgroundColor = null;
            localStorage.setItem(p , "x");
            whWinner();
        }else{
            document.getElementById(p).innerHTML = '<i class="bi bi-circle" style="color: #64F014;"></i>';
            player_2.style.backgroundColor = "#EFEC1B";
            player_1.style.backgroundColor = null;
            localStorage.setItem(p , "o");
            whWinner();
        }
    }
}

function checkPlayer(player){
    if(player%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function selectPlayer(){
    if((localStorage.getItem('winner') == 'player_2') || checkPlayer(a)){
        player_2.style.backgroundColor = "#EFEC1B";
        player_1.style.backgroundColor = null;
    }
    else if((localStorage.getItem('winner') == 0 || (localStorage.getItem('winner') == 'player_1'))){
        player_1.style.backgroundColor = "#EFEC1B";
        player_2.style.backgroundColor = null;
    }
}

function whWinner(){
    if((localStorage.getItem('a') >= 1) && (localStorage.getItem('a') <= 9)){
        btnAnotherMatch();
        if( ((localStorage.getItem('p1') == 'o') && (localStorage.getItem('p2') == 'o') && (localStorage.getItem('p3') == 'o')) ||
            ((localStorage.getItem('p3') == 'o') && (localStorage.getItem('p4') == 'o') && (localStorage.getItem('p5') == 'o')) ||
            ((localStorage.getItem('p6') == 'o') && (localStorage.getItem('p7') == 'o') && (localStorage.getItem('p8') == 'o')) ||
            ((localStorage.getItem('p1') == 'o') && (localStorage.getItem('p4') == 'o') && (localStorage.getItem('p7') == 'o')) ||
            ((localStorage.getItem('p2') == 'o') && (localStorage.getItem('p5') == 'o') && (localStorage.getItem('p6') == 'o')) ||
            ((localStorage.getItem('p3') == 'o') && (localStorage.getItem('p6') == 'o') && (localStorage.getItem('p9') == 'o')) ||
            ((localStorage.getItem('p1') == 'o') && (localStorage.getItem('p5') == 'o') && (localStorage.getItem('p9') == 'o')) ||
            ((localStorage.getItem('p3') == 'o') && (localStorage.getItem('p5') == 'o') && (localStorage.getItem('p7') == 'o')) ){
                console.log(localStorage);
                localStorage.setItem('winner', 'player_1');
                msgWinner('player_1');
                let winplayer_1 = localStorage.getItem("win_player_1");
                localStorage.setItem("win_player_1", ++winplayer_1);
                win_player_1.innerHTML = localStorage.getItem("win_player_1");
        }
        if( ((localStorage.getItem('p1') == 'x') && (localStorage.getItem('p2') == 'x') && (localStorage.getItem('p3') == 'x')) ||
            ((localStorage.getItem('p3') == 'x') && (localStorage.getItem('p4') == 'x') && (localStorage.getItem('p5') == 'x')) ||
            ((localStorage.getItem('p6') == 'x') && (localStorage.getItem('p7') == 'x') && (localStorage.getItem('p8') == 'x')) ||
            ((localStorage.getItem('p1') == 'x') && (localStorage.getItem('p4') == 'x') && (localStorage.getItem('p7') == 'x')) ||
            ((localStorage.getItem('p2') == 'x') && (localStorage.getItem('p5') == 'x') && (localStorage.getItem('p6') == 'x')) ||
            ((localStorage.getItem('p3') == 'x') && (localStorage.getItem('p6') == 'x') && (localStorage.getItem('p9') == 'x')) ||
            ((localStorage.getItem('p1') == 'x') && (localStorage.getItem('p5') == 'x') && (localStorage.getItem('p9') == 'x')) ||
            ((localStorage.getItem('p3') == 'x') && (localStorage.getItem('p5') == 'x') && (localStorage.getItem('p7') == 'x')) ){
                console.log(localStorage);
                localStorage.setItem('winner', 'player_2');
                msgWinner('player_2');
                let winplayer_2 = localStorage.getItem("win_player_2");
                localStorage.setItem("win_player_1", ++winplayer_2);
                win_player_2.innerHTML = localStorage.getItem("win_player_2");
        }
    }
}


function msgWinner(player){
    setTimeout(function(){ 
        win.style.display = "flex";
        play.style.display = "none";
        player_win.innerHTML = localStorage.getItem(player);
    }, 4);
}


function anotherMatch(){
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "";
    p4.innerHTML = "";
    p5.innerHTML = "";
    p6.innerHTML = "";
    p7.innerHTML = "";
    p8.innerHTML = "";
    p9.innerHTML = "";
    localStorage.setItem('a', 0);
    localStorage.removeItem('p1');
    localStorage.removeItem('p2');
    localStorage.removeItem('p3');
    localStorage.removeItem('p4');
    localStorage.removeItem('p5');
    localStorage.removeItem('p6');
    localStorage.removeItem('p7');
    localStorage.removeItem('p8');
    localStorage.removeItem('p9');
    localStorage.setItem('winner', 0);
    win.style.display = "none";
    selectPlayer();
    btnAnotherMatch();
}

function btnAnotherMatch(){
    if(localStorage.getItem('a') >= 1){
        another_match.style.display = 'block';
    }else{
        another_match.style.display = 'none';
    }
}


function reset() {
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "";
    p4.innerHTML = "";
    p5.innerHTML = "";
    p6.innerHTML = "";
    p7.innerHTML = "";
    p8.innerHTML = "";
    p9.innerHTML = "";
    localStorage.removeItem('p1');
    localStorage.removeItem('p2');
    localStorage.removeItem('p3');
    localStorage.removeItem('p4');
    localStorage.removeItem('p5');
    localStorage.removeItem('p6');
    localStorage.removeItem('p7');
    localStorage.removeItem('p8');
    localStorage.removeItem('p9');
    localStorage.setItem('a', 0);
    localStorage.setItem('winner', 0);
    localStorage.setItem('win_player_1', 0);
    localStorage.setItem('win_player_1', 0);
    win_player_1.innerHTML = localStorage.getItem("win_player_1");
    win_player_2.innerHTML = localStorage.getItem("win_player_2");
    selectPlayer();
    btnAnotherMatch()
}

function back() {
    location.reload();
}