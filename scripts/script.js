let i = 0;
let passing = 5.5;
let collectedCredits = 0.0;

function calculateTotalCredits() {
    let totalCredits = 60;

    let gradeId = "grade-";
    let creditsId = "credits-";

    for (let i = 1; i < 11; i++) {

        let grade = 0.0;

        if (i == 6 || i == 10 || i == 8 || i == 9) {

            let sumGrades = 0.0;
            let additional = 1;

            if (i == 8 || i == 9) {
                additional++;
            }

            for (let j = 1; j < 2 + additional; j++) {
                sumGrades += Number(document.getElementById(gradeId + i + "." + j).textContent);
            }

            if (isExamPassed(sumGrades / 2)) {
                collectedCredits += Number(document.getElementById(creditsId + i).textContent);
            }
        }
        else {
            grade = document.getElementById(gradeId + i).textContent;

            if (isExamPassed(grade)) {
                collectedCredits += Number(document.getElementById(creditsId + i).textContent);
            }
        }

    }

    move();
}

function isExamPassed(grade) {
    if (grade) {
        if (grade >= passing) {
            return true;
        }
    }

    return false;
}

function move() {
    let percent = (100.0 / 60.0 * collectedCredits);

    if (i == 0) {
        i = 1;
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (width >= percent) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}