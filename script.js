// MİNUS AND PLUS
const plus1 = document.querySelector(".plus_1");
const plus2 = document.querySelector(".plus_2");
const minus1 = document.querySelector(".minus_1");
const minus2 = document.querySelector(".minus_2");
const score1 = document.querySelector(".score_1");
const score2 = document.querySelector(".score_2");

plus1.addEventListener("click", function () {
  let score = parseInt(score1.innerHTML);
  score1.innerHTML = ++score;
});

minus1.addEventListener("click", function () {
  let score = parseInt(score1.innerHTML);
  if (score > 0) {
    score1.innerHTML = --score;
  }
});

plus2.addEventListener("click", function () {
  let score = parseInt(score2.innerHTML);
  score2.innerHTML = ++score;
});

minus2.addEventListener("click", function () {
  let score = parseInt(score2.innerHTML);
  if (score > 0) {
    score2.innerHTML = --score;
  }
});

//UPDATE SCORE
const update1 = document.querySelector(".update_1");

update1.addEventListener("click", function () {
  const updateScore = prompt("Update the score");
  const updateScoreNumber = parseInt(updateScore);
  if (!isNaN(updateScoreNumber) && updateScoreNumber > 0) {
    score1.innerHTML = updateScoreNumber;
  } else {
    const currentNumber = parseInt(prompt("Please enter a score"));
    if (!isNaN(currentNumber) && currentNumber > 0) {
      score1.innerHTML = currentNumber;
    } else {
      alert("You did not enter a valid score! Please try again");
    }
  }
});

const update2 = document.querySelector(".update_2");

update2.addEventListener("click", function () {
  const updateScore2 = prompt("Update the score");
  const updateScoreNumber2 = parseInt(updateScore2);
  if (!isNaN(updateScoreNumber2) && updateScoreNumber2 > 0) {
    score2.innerHTML = updateScoreNumber2;
  } else {
    const currentNumber2 = parseInt(prompt("Please enter a score"));
    if (!isNaN(currentNumber2) && currentNumber2 > 0) {
    } else {
      alert("You did not enter a valid score! Please try again");
    }
  }
});

//CHANGE TEAM NAME

const change2 = document.querySelector(".change_2");
const name2 = document.querySelector(".name_2");

change2.addEventListener("click", function () {
  const changeName2 = prompt("Give the team a new name");
  if (changeName2.length > 0) {
    name2.innerHTML = changeName2;
  } else {
    const currentName = prompt("Please enter a valid name");
    name2.innerHTML = currentName;
  }
});

const change1 = document.querySelector(".change_1");
const name1 = document.querySelector(".name_1");

change1.addEventListener("click", function () {
  const changeName1 = prompt("Give the team a new name");
  if (changeName1.length > 0) {
    name1.innerHTML = changeName1;
  } else {
    const currentName = prompt("Please enter a valid name");
    name1.innerHTML = currentName;
  }
});

//RESET

const reset1 = document.querySelector(".reset_1");

reset1.addEventListener("click", function () {
  score1.innerHTML = 0;
  name1.innerHTML = "TEAM 1";
});

const reset2 = document.querySelector(".reset_2");

reset2.addEventListener("click", function () {
  score2.innerHTML = 0;
  name2.innerHTML = "TEAM 2";
});

//ACTİVE TEAM
const team2 = document.querySelector(".team_2");
const team1 = document.querySelector(".team_1");

team2.addEventListener("mouseenter", function () {
  team2.classList.toggle("team--active");
  team1.classList.toggle("team--active");
});

team2.addEventListener("mouseleave", function () {
  team2.classList.toggle("team--active");
  team1.classList.toggle("team--active");
});
