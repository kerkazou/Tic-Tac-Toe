
let a = 0;

function Start(){
    const home = document.getElementById('home');
    const play = document.getElementById('play');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const name_player_1 = document.querySelector('.name_player_1');
    const name_player_2 = document.querySelector('.name_player_2');
    const player_1 = document.querySelector('#player_1');
    const player_2 = document.querySelector('#player_2');
    
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
        player1.style.border = "green 2px solid";
        player2.style.border = "green 2px solid";
        document.querySelector('.btn-close').click()
        
        localStorage.setItem('player_1' , player1.value);
        localStorage.setItem('player_2' , player2.value);

        player_1.style.backgroundColor = "#EFEC1B";
        player_2.style.backgroundColor = null;
        
        name_player_1.innerHTML = localStorage.getItem('player_1');
        name_player_2.innerHTML = localStorage.getItem('player_1');
        
        home.style.display = "none";
        play.style.display = "flex";
    }
}

function myfunction(p) {
    if(document.getElementById(p).innerHTML == ""){
        a++;
        const player_1 = document.querySelector('#player_1');
        const player_2 = document.querySelector('#player_2');
        if(checkPlayer(a)){
            document.getElementById(p).innerHTML = '<i class="bi bi-x-lg" style="color: #D21BEF;"></i>';
            player_1.style.backgroundColor = "#EFEC1B";
            player_2.style.backgroundColor = null;
        }else{
            document.getElementById(p).innerHTML = '<i class="bi bi-circle" style="color: #64F014;"></i>';
            player_2.style.backgroundColor = "#EFEC1B";
            player_1.style.backgroundColor = null;
        }
    }
    gameOver();
}

function checkPlayer(player){
    if(player%2 == 0){
        return true;
    }
    else{
        return false;
    }
}


function back() {
    location.reload();
    // const home = document.getElementById('home');
    // const play = document.getElementById('play');
    // document.getElementById('player1').value = "";
    // document.getElementById('player2').value = "";
    // localStorage.clear();
    // home.style.display = "flex";
    // play.style.display = "none";
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
}


function gameOver(){
    if(a == 5){
        // alert('.....');
    }
    if(a == 9){
        alert('Game Over');
    }
}