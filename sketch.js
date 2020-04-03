var Board;
const Player = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const felter = document.querySelectorAll('.felt');

startSpil();

function startSpil() {
    document.querySelecter('.stop').style.display = "none";
    document.querySelector('.stop .GameOver').innerText ="";
    for (let i = 0; i < felter.length; i++) {
        felter[i].innerText = '';
        felter[i].style.removeProperty('background-color');
      }


}
