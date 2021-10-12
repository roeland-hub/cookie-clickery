let button = document.getElementById('cookie');
let scoreOnScreen = document.getElementById('label');
let score = 0;
let multiplyButton = document.createElement('button');
let section = document.getElementById('section');
let increse = 1;
let multiplier = 2;
let cost = 10;
let autoClicker = document.createElement('button');
let autoMultiplier = 5
let bonusClicker = document.createElement('button');
let bonusMultiplier = 20;

section.appendChild(autoClicker);
section.appendChild(bonusClicker);

function zeroScore(){if(score < 0) { score = 0}}


multiplyButton.innerHTML = `multiply ${multiplier} cost ${cost}`
section.appendChild(multiplyButton);

button.addEventListener('click', function () {
    score += increse;
    scoreOnScreen.innerHTML = score;
    
})

multiplyButton.addEventListener('click', function(){
    increse *= multiplier;
    score = score - cost;
    zeroScore
    scoreOnScreen.innerHTML = score;
    cost *= multiplier
    multiplyButton.innerHTML = `multiply ${multiplier} cost ${cost}`

})

autoClicker.innerHTML = `automultiply ${autoMultiplier}cookies cost ${cost}`
autoClicker.addEventListener('click', function(){
    score = score - cost;
    zeroScore
    setInterval(function() {
        score += autoMultiplier;
        scoreOnScreen.innerHTML = score;
    },500);
    
})

bonusClicker.innerHTML = `bonusmultiply ${bonusMultiplier}cookies cost ${cost}`
bonusClicker.addEventListener('click', function(){
    score = score - cost;
    zeroScore
    let myvar = setInterval(function() {
        score += bonusMultiplier;
        scoreOnScreen.innerHTML = score;
    },500);
    setTimeout(function(){
        clearInterval(myvar);
    },5000)
})