const questions = [
    {
        question: "Which is the largest tag in html?",
        answers: [
            { text: "h2", correct: "false" },
            { text: "h6", correct: "false" },
            { text: "h1", correct: "true" },
            { text: "h4", correct: "false" }
        ]
    },
    {
        question: "Which tag is used to add css in html?",
        answers: [
            { text: "style", correct: "true" },
            { text: "a", correct: "false" },
            { text: "css", correct: "false" },
            { text: "script", correct: "false" }
        ]
    },
    {
        question: "Which react hook is used to add state in functional component?",
        answers: [
            { text: "useMemo", correct: "false" },
            { text: "useReducer", correct: "false" },
            { text: "useEffect", correct: "false" },
            { text: "useState", correct: "true" }
        ]
    },
    {
        question: "How do you call the function 'myFunction'?",
        answers: [
            { text: "myFucntion", correct: "false" },
            { text: "func myFunction()", correct: "false" },
            { text: "myFunction()", correct: "true" },
            { text: "None of these", correct: "false" }
        ]
    },
    {
        question: "Which snippet of CSS is commonly used to center a website horizontally?",
        answers: [
            { text: "site-align: center;", correct: "false" },
            { text: "margin: auto 0;", correct: "true" },
            { text: "margin: center;", correct: "false" },
            { text: "margin: 0 auto;", correct: "false" }
        ]
    },
    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        answers: [
            { text: "pop()", correct: "true" },
            { text: "push()", correct: "false" },
            { text: "shift()", correct: "false" },
            { text: "unshift()", correct: "false" }
        ]
    },
    {
        question: "What keyword is used to create a JavaScript variable",
        answers: [
            { text: "variable", correct: "false" },
            { text: "varies", correct: "false" },
            { text: "string", correct: "false" },
            { text: "var", correct: "true" }
        ]
    },
    {
        question: "Which is not a JavaScript data type?",
        answers: [
            { text: "boolean", correct: "false" },
            { text: "double", correct: "true" },
            { text: "undefined", correct: "false" },
            { text: "string", correct: "false" }
        ]
    },
    {
        question: "What is jQuery?",
        answers: [
            { text: "A framework", correct: "false" },
            { text: "jQuery?", correct: "false" },
            { text: "A Library", correct: "true" },
            { text: "None of these", correct: "false" }
        ]
    },
    {
        question: "HTML ID can be used only once?",
        answers: [
            { text: "True", correct: "true" },
            { text: "False", correct: "false" },
            { text: "All of the Above", correct: "false" },
            { text: "None of the Above", correct: "false" }
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();