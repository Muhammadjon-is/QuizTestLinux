
let currentQuestion = 0;
let score = 0;
let totalQuestion = questions.length;
let container = document.getElementById("quizContainer");
let questionElement = document.getElementById("question");
let option1 =  document.getElementById("opt1");
let option2 =  document.getElementById("opt2");
let option3 =  document.getElementById("opt3");
let option4 =  document.getElementById("opt4");
let nextButton = document.getElementById("nextButton");
let  resultCont = document.getElementById("result");

function loadQuestion(questionIndex) {
    let savol = questions[questionIndex];
    questionElement.textContent = (questionIndex+1) +") " + savol.question;
    option1.textContent = savol.option1;
    option2.textContent = savol.option2;
    option3.textContent = savol.option3;
    option4.textContent = savol.option4;
}


function loadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption)
    {alert('Please select an option');
    return;}
    let javob = selectedOption.value;
    if(questions[currentQuestion].answer===javob){
        score += 10; // for every true answer
    }
    selectedOption.checked=false;
    currentQuestion++;

    if ( currentQuestion === totalQuestion -1){
        nextButton.textContent = "Finish";
    }

    if (currentQuestion===totalQuestion){
        container.style.display="none";
        resultCont.style.display="";
        resultCont.textContent = "Your Score:" + score;
        return;
    }


    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

   function  LinxKali(){
    alert("This question  about Linux & Ethical hacking")
   }

