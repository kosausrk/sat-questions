// script.js
const data = [ // Sourced from Google Sheets @ College Board
    {
        "question": "For i = √−1 , what is the sum (7 + 3i ) + (−8 + 9i )?",
        "choices": "A) −1 + 12i\nB) −1 − 6i\nC) 15 + 12i\nD) 15 − 6i",
        "answer": "A",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice A is correct. To calculate (7 + 3i) + (−8 + 9i), add the real parts of\neach complex number, 7 + (−8) = −1, and then add the imaginary parts,\n3i + 9i = 12i. The result is −1 + 12i.",
        "question_number": 2,
        "practice-test": 1
    },
    {
        "question": "On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent p text messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?",
        "choices": "A) 9mp\nB) 20mp\nC) 5 +4 m p\nD) 4 +5 m p",
        "answer": "C",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice C is correct. The total number of messages sent by Armand\nis the 5 hours he spent texting multiplied by his rate of texting:\nm texts/hour × 5 hours = 5m texts. Similarly, the total number of messages\nsent by Tyrone is the 4 hours he spent texting multiplied by his rate of texting: p texts/hour × 4 hours = 4p texts. The total number of messages sent\nby Armand and Tyrone is the sum of the total number of messages sent by\nArmand and the total number of messages sent by Tyrone: 5m + 4p",
        "question_number": 3,
        "practice-test": 1
    },
    {
        "question": "Kathy is a repair technician for a phone company. Each week, she receives a batch of phones that need repairs. The number of phones that she has left to fix at the end of each day can be estimated with the equation P d = 108 − 23 , where P is the number of phones left and d is the number of days she has worked that week. What is the meaning of the value 108 in this equation?",
        "choices": "A) Kathy will complete the repairs within 108 days.\nB) Kathy starts each week with 108 phones to fix.\nC) Kathy repairs phones at a rate of 108 per hour.\nD) Kathy repairs phones at a rate of 108 per day.",
        "answer": "B",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice B is correct. The value 108 in the equation is the value of P in\nP = 108 − 23 d when d = 0. When d = 0, Kathy has worked 0 days that week.\nIn other words, 108 is the number of phones left before Kathy has started\nwork for the week. Therefore, the meaning of the value 108 in the equation\nis that Kathy starts each week with 108 phones to fix because she has worked\n0 days and has 108 phones left to fix.",
        "question_number": 4,
        "practice-test": 1
    },
    {
        "question": "(x^2*y - 3y^2+5xy^2) - (-x^2y+3xy^2-3y^2) Which of the following is equivalent to the\nexpression above?",
        "choices": "A) 4x^2y^2\nB) 8xy^2-6y^2\nC) 2x^2*y +2xy^2\nD) 2x^2 *y +8xy^2 - 6y^2",
        "answer": "C",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice C is correct. Only like terms, with the same variables and exponents,\ncan be combined to determine the answer ",
        "question_number": 5,
        "practice-test": 1
    },
    {
        "question": "A pediatrician uses the model above to estimate the\nheight h of a boy, in inches, in terms of the boy’s\nage a, in years, between the ages of 2 and 5. Based\non the model, what is the estimated increase, in\ninches, of a boy’s height each year?",
        "choices": "A) 3\nB) 5.7\nC) 9.5\nD) 14.3",
        "answer": "A",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice A is correct. In the equation h = 3a + 28.6, if a, the age of the\nboy, increases by 1, then h becomes h = 3(a + 1) + 28.6 = 3a + 3 + 28.6 =\n(3a + 28.6) + 3. Therefore, the model estimates that the boy’s height increases\nby 3 inches each year.\nAlternatively: The height, h, is a linear function of the age, a, of the boy. The\ncoefficient 3 can be interpreted as the rate of change of the function; in this \n28\ncase, the rate of change can be described as a change of 3 inches in height for\nevery additional year in age",
        "question_number": 6,
        "practice-test": 1
    },
    {
        "question": "if a/b = 2, what is the value of 4b/a? ",
        "choices": "A) 0\nB) 1\nC) 2\nD) 4",
        "answer": "C",
        "source": "https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1.pdf",
        "explaination": "Choice C is correct. Since a/b\n = 2, it follows that b/a\n = 1/2\n Multiplying both sides\nof the equation by 4 gives 4(b/a) and since b/a is 1/2 that is the same thing as 4*1/2 which is 2. Answer choice C)",
        "question_number": 8,
        "practice-test": 1
    }
];

// To DO
// Implement NAV bar
// implement Quiz Feature
// Make everything look somewhat decent

for (let x = 0; x < data.length; x++) {
    let text = document.createElement("p");
    let source_button = document.createElement("a");
    let container = document.createElement("div");
    let choices = document.createElement("p");
    let show_button = document.createElement("a");
    let answer = document.createElement("p");
    let explaination = document.createElement("p");

    explaination.innerHTML = "Press answer button to get a explaination";
    answer.innerHTML = "Press answer button to reveal the answer";
    answer.classList.add("answer");
    show_button.innerHTML = "Show Answer";
    show_button.classList.add("show-button");

    show_button.addEventListener("click", () => {
        if (show_button.innerHTML == "Show Answer") {
            answer.innerHTML = data[x]["answer"];
            explaination.innerHTML = data[x]["explaination"];
            show_button.innerHTML = "Hide Answer";
        } else {
            show_button.innerHTML = "Show Answer";
            answer.innerHTML = "Press answer button to reveal the answer";
            explaination.innerHTML = "Press answer button to get a explaination";
        }
    });

    choices.innerHTML = data[x]["choices"];
    choices.classList.add("choices");

    source_button.innerHTML = "Source";
    source_button.href = data[x]["source"];
    source_button.target = "_blank";
    source_button.classList.add("source-button");

    container.classList.add("container");
    text.innerHTML = data[x]["question"];
    text.classList.add("text");
    const card = document.querySelector(".card");
    container.appendChild(text);
    container.appendChild(choices);
    container.appendChild(answer);
    container.appendChild(explaination);
    container.appendChild(source_button);
    container.appendChild(show_button);

    card.appendChild(container);
}

let currentQuestionIndex = 0;
let score = 0;

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');
const currentScore = document.getElementById('current-score');
const totalQuestions = document.getElementById('total-questions');
const questionContainer = document.getElementById('question-container');
const navigationButtons = document.getElementById('navigation-buttons');
const scoreContainer = document.getElementById('score-container');

function showQuestion(index) {
    const question = data[index];
    questionNumber.textContent = `Question #${index + 1}`;
    questionText.textContent = question.question;
    choicesContainer.innerHTML = ''; // Clear previous choices

    const choices = question.choices.split('\n');

    const radioInputDiv = document.createElement('div');
    radioInputDiv.classList.add('radio-input');

    choices.forEach(choice => {
        const label = document.createElement('label');
        label.classList.add('label');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question';
        radio.value = choice.charAt(0);

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = choice;

        label.appendChild(radio);
        label.appendChild(textSpan);
        radioInputDiv.appendChild(label);
    });

    choicesContainer.appendChild(radioInputDiv);

    // Update navigation buttons
    prevButton.disabled = index === 0;
    nextButton.textContent = index === data.length - 1 ? 'Finish' : 'Next';
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="question"]:checked');
    if (selectedAnswer && selectedAnswer.value === data[currentQuestionIndex].answer) {
        score++;
        currentScore.textContent = score;
    }
}

function nextQuestion() {
    checkAnswer();
    if (currentQuestionIndex < data.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        // Quiz finished
        questionContainer.style.display = 'none';
        navigationButtons.style.display = 'none';
        scoreContainer.innerHTML = `<h3>Quiz Finished!</h3><h3>Your Final Score: ${score} / ${data.length}</h3>`;
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
}

// Initialization
showQuestion(currentQuestionIndex);
totalQuestions.textContent = data.length;

// Event listeners
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);