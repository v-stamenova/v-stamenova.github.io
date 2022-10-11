
window.addEventListener('load', function () {
    const ageElement = document.getElementById('age');

    const birthDate = new Date(2003, 9, 30);

    let ageDifMs = Date.now() - birthDate;
    let ageDate = new Date(ageDifMs);

    ageElement.innerHTML = Math.abs(ageDate.getUTCFullYear() - 1969);
});