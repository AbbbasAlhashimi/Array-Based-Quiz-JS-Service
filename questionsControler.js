  // This displays the current questions AND the choices
  function displayCurrentQuestion()
  {
      console.log("In display current Question"); //Test the transaction [Optional]
      var question = questions[currentQuestion].question; //passing The array of questions in [questions.js] into the [question] DIV
      var questionClass = $(document).find(".quizContainer > .question");
      var choiceList = $(document).find(".quizContainer > .choiceList");
      var numChoices = questions[currentQuestion].choices.length;

      // Set the questionClass text to the current question
      $(questionClass).text(question);

      // Remove all current <li> elements (if any)
      $(choiceList).find("li").remove();

      var choice;
      for (i = 0; i < numChoices; i++)
      {
          choice = questions[currentQuestion].choices[i];
          //add Number [i] of Radio Button choices to the list of choices
          $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
      }
  }
  //Re-set values of current and correct answers
  function resetQuiz()
  {
      currentQuestion = 0;
      correctAnswers = 0;
      hideScore();
  }

  //Display number of correct scors along with total number of questions
  function displayScore()
  {
      $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
      $(document).find(".quizContainer > .result").show();
  }

  //Hide scores from each question DIV
  function hideScore()
  {
      $(document).find(".result").hide();
  }