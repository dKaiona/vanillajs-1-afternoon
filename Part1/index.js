let aArray = [];

function play (val) {
    const player = document.getElementById('player');
    const element = document.getElementById(val);
    if (player.innerText === 'X') {
        player.innerText = 'O';
        element.innerText = 'X';
        aArray[val] = 'X';
    } else {
    player.innerText = 'X';
    element.innerText = 'O';
    aArray[val] = 'O';
     }console.log(aArray)

    


















};



