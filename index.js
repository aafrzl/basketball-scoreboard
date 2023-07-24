let homeCount = 0;
let guestCount = 0;

let homeScore = document.getElementById('score-home');
let guestScore = document.getElementById('score-guest');

let homeHighlight = document.querySelector('.home-score');
let guestHighlight = document.querySelector('.guest-score');

let information = document.getElementById('information');

//counter
function homePlusOne() {
  homeCount += 1;
  homeScore.textContent = homeCount;
  winningTeam();
}

function homePlusTwo() {
  homeCount += 2;
  homeScore.textContent = homeCount;
  winningTeam();
}

function homePlusThree() {
  homeCount += 3;
  homeScore.textContent = homeCount;
  winningTeam();
}

function guestPlusOne() {
  guestCount += 1;
  guestScore.textContent = guestCount;
  winningTeam();
}
function guestPlusTwo() {
  guestCount += 2;
  guestScore.textContent = guestCount;
  winningTeam();
}
function guestPlusThree() {
  guestCount += 3;
  guestScore.textContent = guestCount;
  winningTeam();
}

//counter reset
function btnReset() {
  homeCount = 0;
  guestCount = 0;
  homeScore.textContent = homeCount;
  guestScore.textContent = guestCount;
  information.textContent = 'Game is reset!';
  homeHighlight.style.boxShadow = 'none';
  guestHighlight.style.boxShadow = 'none';
  information.style.display = 'none';
}

//Function winning team
function winningTeam() {
  if (homeCount == guestCount) {
    information.textContent = 'Tie!';
    information.style.display = 'block';

    homeHighlight.style.boxShadow = 'none';
    homeHighlight.style.boxShadow = 'none';
  } else if (homeCount > guestCount) {
    information.textContent = 'Home team is winning!';
    information.style.display = 'block';

    homeHighlight.style.boxShadow = '0 0 10px 5px #00ff00';
    guestHighlight.style.boxShadow = 'none';
  } else if (guestCount > homeCount) {
    information.textContent = 'Guest team is winning!';
    information.style.display = 'block';

    guestHighlight.style.boxShadow = '0 0 10px 5px #00ff00';
    homeHighlight.style.boxShadow = 'none';
  }
}
