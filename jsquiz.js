//Array of Questions
var questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of Bufallo called?",
    choices: ["calf", "baby", "pup","cow"],
    correctAnswer: 0
}, {
    question: "What a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}];

//Initializing questions and answers
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

//JQuery Library Reference / Function that ensure the page is fully loaded
$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    //Hide the next Quiz message, otherwise it will appear as blank space
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function ()
    {
        //If the quiz is still going
        if (!quizOver)
        {
            //Adding Radio buttons with Nested Values, we could add name,id,etc.
            value = $("input[type='radio']:checked").val();

            //Check if [NEXT] Button is clicked without an answer selection
            if (value == undefined)
            {
                //Initialize default response
                $(document).find(".quizMessage").text("Please select an answer");
                //Select the error message
                $(document).find(".quizMessage").show();
            }
            
            else
            {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                //Counter for correct answers
                if (value == questions[currentQuestion].correctAnswer)
                {
                    correctAnswers++;
                }
                //Counter for answes regardless to being correct or incorrect
                currentQuestion++; // Since we have already displayed the first question on DOM ready
                
                //Check if there any questions left to either display the remaining ones or offer a [Play Again] option
                if (currentQuestion < questions.length)
                {
                    displayCurrentQuestion();
                } 
                
                else
                {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }

        }
        
        else
        { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {
    //Test the transaction [Optional]
    console.log("In display current Question");

    var questionList = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(questionList);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}