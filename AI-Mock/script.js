// START INTERVIEW (index page)
function startInterview() {
    const role = document.getElementById("role").value;

    if (role === "") {
        alert("Please select a role");
        return;
    }

    localStorage.setItem("selectedRole", role);
    window.location.href = "interview.html";
}

// GET ROLE
const role = localStorage.getItem("selectedRole");

// SHOW ROLE
window.onload = function () {

    console.log("Role:", role);

    // If role exists, show it
    const roleDisplay = document.getElementById("roleDisplay");
    if (roleDisplay && role) {
        roleDisplay.innerText = "Role: " + role;
    }

    // Load questions only if question element exists
    if (document.getElementById("question")) {
        loadQuestion();
    }
};

// QUESTIONS DATA
const questionsData = {
    "Software Engineer": [
        "What is OOP?",
        "Explain REST API",
        "What is a database?",
        "Explain async programming",
        "What is Git?"
    ],
    "HR": [
        "What is employee engagement?",
        "How do you handle conflict?",
        "What is recruitment process?",
        "Define HR policies",
        "How to motivate employees?"
    ],
    "Data Analyst": [
        "What is data cleaning?",
        "Explain Excel functions",
        "What is SQL?",
        "What is data visualization?",
        "Explain Python in data analysis"
    ]
};

let currentQuestionIndex = 0;
let questions = questionsData[role];

// LOAD QUESTION
function loadQuestion() {

    if (!questions) {
        document.getElementById("question").innerText =
            "Error: No questions found for this role!";
        return;
    }

    document.getElementById("question").innerText =
        questions[currentQuestionIndex];
}

// NEXT QUESTION
function nextQuestion() {

    const answerBox = document.getElementById("answer");

    if (!answerBox) return;

    const answer = answerBox.value;

    if (answer === "") {
        alert("Please enter your answer");
        return;
    }

    answerBox.value = "";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Interview Completed!";
    }
}