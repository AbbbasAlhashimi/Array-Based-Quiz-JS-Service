# Array-Based-Quiz-JS-Service
A Simplified Array-Based Quiz JS service that does not involve a Database of any kind except for an array with 3 Identifiers: Question, Choice, and Correct Answer<br>
The JavaScript Consists of a Single JS file broacken into 3 files for a clean and easy-to-understand code:<br>
<ul>
  
  <li><b>Questions.js</b>
  <br> This part involves the array of questions with three values for each question: Question - Choice - Correct Answer.
  </li>
  
  <li><b>jsquiz.js</b>
  <br> We begin by Initializing the values of questions and answers. Then Assigning a JQuery Library Reference which is a Function that ensures the page is fully loaded.
  <br> The following steps is all around Displaying the interface controls including questions, answers, feedback, and also ensure that the user actually picks an answer before the answer is submitted.<br> Which in this case involves showing a hidden error message asking the user to select an option before the [NEXT-Question] Buttons comes active again.<br>
  </li>
  <li><b>questionsControler.js</b>
  <br>This script involves 4 Functions:<br>
  1) displayCurrentQuestion(): Whih is responsible for displaying the current questions and choices at first, and next.<br>
  2) resetQuiz(): Which is reponsible for clearing entries by changing them into empty string values.<br>
  3) displayScore(): Which is reponsible for Displaying the result message when the quiz list is over.<br>
  4) hideScore(): Which is reponsible for hiding the score while the user is taking the quiz.
  </li>
</ul>

 <br>
 The Code implementation can be found on CodePen.io [https://codepen.io/abbbas_alhashimi/pen/vYxPqdO]<br>
Please feel free to reach me out via LinkedIn [https://www.linkedin.com/in/abbas-fadhil-ab53ba82/] <br>
Kind regards
