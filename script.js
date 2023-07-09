const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const btnnew = document.querySelector('.btn--new');

const p1 = document.querySelector('.player.player--0');
const p2 = document.querySelector('.player.player--1');

const currscore1 = document.getElementById('current--0');
const currscore2 = document.getElementById('current--1');

const Score1 = document.querySelector('#score--0');
const Score2 = document.querySelector('#score--1');
const rolldice = document.querySelector('.dice');

Score1.textContent = 0;
Score2.textContent = 0;
rolldice.classList.add('hidden');

let curr = 0;
let s1 = 0;
let s2 = 0;

roll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;

    rolldice.classList.remove('hidden');
    rolldice.src = `dice-${dice}.png`;

    if (dice !== 1) {
        curr = curr + dice;
        if (p1.classList.contains('player--active')) {
            currscore1.textContent = curr;
        }
        else {
            currscore2.textContent = curr;
        }
    }
    else {
        curr = 0;
        p1.classList.toggle('player--active');
        p2.classList.toggle('player--active');
        currscore1.textContent = 0;
        currscore2.textContent = 0;
    }
})


hold.addEventListener('click', function () {
    if (p1.classList.contains('player--active')) {
        s1 += curr;
        Score1.textContent = s1;
        p1.classList.remove('player--active');
        p2.classList.add('player--active');
        currscore1.textContent = 0;
        curr = 0;
    }
    else {
        s2 += curr;
        Score2.textContent = s2;
        p2.classList.remove('player--active');
        p1.classList.add('player--active');
        currscore2.textContent = 0;
        curr = 0;
    }

    if (s1 >= 100) {
        p1.classList.add('player--winner');
        roll.disabled = true;
        hold.disabled = true;
        rolldice.classList.add('hidden');
    }
    else if (s2 >= 100) {
        p2.classList.add('player--winner');
        roll.disabled = true;
        hold.disabled = true;
        rolldice.classList.add('hidden');
    }
})

btnnew.addEventListener('click', function () {
    curr = 0;
    s1 = 0;
    s2 = 0;
    Score1.textContent = 0;
    Score2.textContent = 0;
    currscore1.textContent = 0;
    currscore2.textContent = 0;
    roll.disabled = false;
    hold.disabled = false;
    if (p1.classList.contains('player--winner')) {
        p1.classList.remove('player--winner');
    }
    else if (p2.classList.contains('player--winner')) {
        p2.classList.remove('player--winner');
    }

    if (p2.classList.contains('player--active')) {
        p2.classList.remove('player--active');
        p1.classList.add('player--active');
    }
})
