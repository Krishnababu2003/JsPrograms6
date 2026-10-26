const questions = [
    {
        title: "Question 1: map()",
        question: "Create an array of 5 numbers. Use map() to multiply each number by 2.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.map(num => num * 2);

console.log(result);`,
        output: "[20, 40, 60, 80, 100]"
    },

    {
        title: "Question 2: filter()",
        question: "Use filter() to display numbers greater than 25.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.filter(num => num > 25);

console.log(result);`,
        output: "[30, 40, 50]"
    },

    {
        title: "Question 3: reduce()",
        question: "Use reduce() to calculate the sum of all numbers.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.reduce(
    (total, num) => total + num, 0
);

console.log(result);`,
        output: "150"
    },

    {
        title: "Question 4: forEach()",
        question: "Use forEach() to print every number in the array.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

numbers.forEach(num => {
    console.log(num);
});`,
        output: "10, 20, 30, 40, 50"
    },

    {
        title: "Question 5: find()",
        question: "Use find() to find the first number greater than 25.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.find(num => num > 25);

console.log(result);`,
        output: "30"
    },

    {
        title: "Question 6: some()",
        question: "Check whether at least one number is greater than 40.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.some(num => num > 40);

console.log(result);`,
        output: "true"
    },

    {
        title: "Question 7: every()",
        question: "Check whether every number is greater than 5.",
        input: "[10, 20, 30, 40, 50]",
        code: `const numbers = [10, 20, 30, 40, 50];

const result = numbers.every(num => num > 5);

console.log(result);`,
        output: "true"
    }
];

// Display Questions

const questionsDiv = document.getElementById("questions");

questions.forEach((item, index) => {

    questionsDiv.innerHTML += `
        <div class="question">

            <h3>${item.title}</h3>

            <p>${item.question}</p>

            <p><b>Input:</b> ${item.input}</p>

            <button onclick="toggleAnswer(${index})">
                Show Answer
            </button>

            <div class="answer" id="answer${index}">

                <h4>Answer Code</h4>

                <pre>${item.code}</pre>

                <p class="output">
                    Expected Output: ${item.output}
                </p>

            </div>

        </div>
    `;

});

// Show / Hide Answer

function toggleAnswer(index) {

    const answer = document.getElementById("answer" + index);

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }

}

// Date Module

const today = new Date();

function showDate() {
    document.getElementById("dateOutput").innerHTML =
        today.toLocaleDateString();
}

function showTime() {
    document.getElementById("dateOutput").innerHTML =
        new Date().toLocaleTimeString();
}

function showDay() {

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
    ];

    document.getElementById("dateOutput").innerHTML =
        days[today.getDay()];
}

function showMonth() {

    const months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    document.getElementById("dateOutput").innerHTML =
        months[today.getMonth()];
}

function showYear() {
    document.getElementById("dateOutput").innerHTML =
        today.getFullYear();
}
