function populate() {
    if(quiz.isEnded()) {

        showScores();

    }
    else {

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        var choices = quiz.getQuestionIndex().choices;
        for (var i =0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];

            guess ("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

    };

    function showProgress(){
        var CurrentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question " + CurrentQuestionNumber + " de " + quiz.questions.length;
}

function showScores() {

    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'>Votre Score: " + quiz.score + "</h2>";

        var element = document.getElementById("quiz");
        element.innerHTML  = gameOverHtml;


};




var questions = [
    new Question("Quell est le langage de style pour le page web?", ["Java", "c#", "css", "HTML"], "css"),
    new Question("JavaScript est pour faire le page ?", ["Dynamique", "Statique", "Tous est Vrai", "Tous est faux"], "Dynamique"),
    new Question("Le chien a  ______  pattes .", ["1", "6", "2", "4"], "4" ),
    new Question("Quell language est utilisé pour des App web?", ["PHP", "Python", "JavaScript", "Tous"], "Tous" ),
    new Question("MVC est un______.", ["Language", "Library", "Framework", "Tous"], "Framework")
    
];


var quiz = new Quiz (questions);

populate();