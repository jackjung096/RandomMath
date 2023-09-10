document.addEventListener("DOMContentLoaded", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operator = document.getElementById("operator");
    const answerInput = document.getElementById("answer");
    const checkButton = document.getElementById("check");
    const message = document.getElementById("message");

    // สุ่มเลข
    function generateProblem() {
        const operators = ["+", "-", "*", "/"];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];
        const randomNumber1 = Math.floor(Math.random() * 20) + 1;
        const randomNumber2 = Math.floor(Math.random() * 20) + 1;

        num1.textContent = randomNumber1;
        num2.textContent = randomNumber2;
        operator.textContent = randomOperator;

        return eval(randomNumber1 + randomOperator + randomNumber2);
    }

    // เริ่มเกม
    let correctAnswer = generateProblem();

    checkButton.addEventListener("click", () => {
        const userAnswer = parseFloat(answerInput.value);
        if (!isNaN(userAnswer)) {
            if (userAnswer === correctAnswer) {
                message.textContent = "ถูกต้องแล้วค้าบ!!!";
                message.style.color = "green";
            } else {
                message.textContent = "ผิด!!!";
                message.style.color = "red";
            }
            correctAnswer = generateProblem();
            answerInput.value = "";
        } else {
            message.textContent = "กรุณาใส่คำตอบที่ถูกต้อง";
            message.style.color = "red";
        }
    });
});
