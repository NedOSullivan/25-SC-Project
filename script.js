function checkThem () { //function to check quiz answers
    //assign "0" to the "score" variable
    let score = 0;
    //assign the quiz elements to the quiz variable
    quiz = document.forms.Quizza.elements;
    //assign the answer to the question to the answerOne variable
    answerOne = quiz.italy.value;
    //check answer to the first question
    if (answerOne === "espresso") {
        //add one to the score if the user was right
        score = score + 1;
    }
    answerTwo = quiz.regularly.value;
    if (answerTwo === "60") {
        score = score + 1;
    }
    answerThree = quiz.temperature.value;
    if (answerThree === "100DegreesCelsius") {
        score = score + 1;
    }
    answerFour = quiz.rest.value;
    if (answerFour === "14") {
        score = score + 1;
    }
    answerFive = quiz.producer.value;
    if (answerFive === "Brasil") {
        score = score + 1;
    }

    //alert to page with user's score
    alert ("Nice one, you scored " + score);

}

