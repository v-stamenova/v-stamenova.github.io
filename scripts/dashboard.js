let i = 0;
let passing = 5.5;
let collectedCredits = 0.0;
const gradeId = "grade-";

function calculateTotalCredits() {
    let totalCredits = 60;

    const creditsId = "credits-";

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

            if (i == 8 || i == 9) {
                additional = 1;
            }
            else {
                additional = 0;
            }

            if (isExamPassed(sumGrades / (2 + additional))) {
                collectedCredits += Number(document.getElementById(creditsId + i).textContent);
            }
            colorCells(sumGrades / (2 + additional), i, 2 + additional);
        }
        else {
            grade = document.getElementById(gradeId + i).textContent;

            if (isExamPassed(grade)) {
                collectedCredits += Number(document.getElementById(creditsId + i).textContent);
            }
            colorCells(grade, i, 1);
        }

    }
    move();
}

function colorCells(grade, index, cellCount) {
    if (grade) {
        if (grade >= passing) {
            if (cellCount > 1) {
                alert("so far so good");

                for (let i = 1; i < cellCount + 1; i++) {
                    document.getElementById(gradeId + index + "." + i).style.backgroundColor = "#006D77";
                }
            }
            else {
                document.getElementById(gradeId + index).style.backgroundColor = "#006D77";
            }
        }
        else {
            if (cellCount > 1) {
                for (let i = 1; i < cellCount + 1; i++) {
                    document.getElementById(gradeId + index + "." + i).style.backgroundColor = "#ce5374";
                }
            }
            else {
                document.getElementById(gradeId + index).style.backgroundColor = "#ce5374";
            }
        }
    }
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

    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 30);

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