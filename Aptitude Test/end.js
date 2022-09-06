const username = document.getElementById('username');
const saveScorebtn = document.getElementById('saveScorebtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

const MAX_HIGH_SCOREs = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
saveScorebtn.disabled = !username.value;
})

saveHighScore = e => {
console.log('Clicked on the button');
e.preventDefault();

const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
   
};
highScore.push(score);
highScore.sort( (a,b) => b.score - a.score)

highScore.splice(5);

localStorage.getItem('highScore', JSON.stringify(highScore));
window.location.assign("/")
}