//get the questions components:
const questionsHidden = document.querySelectorAll(".faqs-accordion-hide");
const questionsShow = document.querySelectorAll(".faqs-accordion-show");

function showAnswerQuestion1() {
  questionsHidden[0].style.display = "none";
  questionsShow[0].style.display = "block";
}
function hideAnswerQuestion1() {
  questionsShow[0].style.display = "none";
  questionsHidden[0].style.display = "block";
}

function showAnswerQuestion2() {
  questionsHidden[1].style.display = "none";
  questionsShow[1].style.display = "block";
}
function hideAnswerQuestion2() {
  questionsShow[1].style.display = "none";
  questionsHidden[1].style.display = "block";
}

function showAnswerQuestion3() {
  questionsHidden[2].style.display = "none";
  questionsShow[2].style.display = "block";
}
function hideAnswerQuestion3() {
  questionsShow[2].style.display = "none";
  questionsHidden[2].style.display = "block";
}

function showAnswerQuestion4() {
  questionsHidden[3].style.display = "none";
  questionsShow[3].style.display = "block";
}
function hideAnswerQuestion4() {
  questionsShow[3].style.display = "none";
  questionsHidden[3].style.display = "block";
}
