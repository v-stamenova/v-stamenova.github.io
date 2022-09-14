let i = 0;
const passingThreshold = 5.5;
let collectedCredits = 0.0;
const gradePartialText = "grade-";
const passColor = "#006D77";
const failColor = "#ce5374";

function calculateTotalCredits() {
    let totalCredits = 60;

    const creditsPartialText = "credits-";

    for (let i = 1; i < 11; i++) {

        let grade = 0.0;

        if (i == 6 || i == 10 || i == 8 || i == 9) {

            let sumGrades = 0.0;
            let additional = 1;

            if (i == 8 || i == 9) {
                additional++;
            }

            for (let j = 1; j < 2 + additional; j++) {
                sumGrades += Number(document.getElementById(gradePartialText + i + "." + j).textContent);
            }

            if (i == 8 || i == 9) {
                additional = 1;
            }
            else {
                additional = 0;
            }

            if (isExamPassed(sumGrades / (2 + additional))) {
                collectedCredits += Number(document.getElementById(creditsPartialText + i).textContent);
            }
            colorCells(sumGrades / (2 + additional), i, 2 + additional);
        }
        else {
            grade = document.getElementById(gradePartialText + i).textContent;

            if (isExamPassed(grade)) {
                collectedCredits += Number(document.getElementById(creditsPartialText + i).textContent);
            }
            colorCells(grade, i, 1);
        }

    }
    move();
}

function colorCells(grade, index, cellCount) {
    if (grade) {
        if (grade >= passingThreshold) {
            if (cellCount > 1) {
                for (let i = 1; i < cellCount + 1; i++) {
                    document.getElementById(gradePartialText + index + "." + i).style.backgroundColor = passColor;
                    document.getElementById(gradePartialText + index + "." + i).style.color = "white";
                }
            }
            else {
                document.getElementById(gradePartialText + index).style.backgroundColor = passColor;
                document.getElementById(gradePartialText + index).style.color = "white";
            }
        }
        else {
            if (cellCount > 1) {
                for (let i = 1; i < cellCount + 1; i++) {
                    document.getElementById(gradePartialText + index + "." + i).style.backgroundColor = failColor;
                }
            }
            else {
                document.getElementById(gradePartialText + index).style.backgroundColor = failColor;
            }
        }
    }
}

function isExamPassed(grade) {
    return grade && grade >= passingThreshold
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