
var student = {
    Имя: "Мисирбек",
    Фамилия: "Эралиев",
    Группа: "Ain-2-22",
    "Курс обучения": 2,
    "Женат ли": false,
    Направление: "Программные технологии",
    "Языки программирования": "JavaScript, Python, C++"
};


document.getElementById("name").getElementsByTagName("span")[0].textContent = student.Имя;
document.getElementById("surname").getElementsByTagName("span")[0].textContent = student.Фамилия;
document.getElementById("group").getElementsByTagName("span")[0].textContent = student.Группа;
document.getElementById("course").getElementsByTagName("span")[0].textContent = student["Курс обучения"];
document.getElementById("married").getElementsByTagName("span")[0].textContent = student["Женат ли"] ? "Да" : "Нет";
document.getElementById("major").getElementsByTagName("span")[0].textContent = student.Направление;
document.getElementById("programming-languages").getElementsByTagName("span")[0].textContent = student["Языки программирования"];


console.log("Имя: " + student.Имя);
console.log("Фамилия: " + student.Фамилия);
console.log("Группа: " + student.Группа);
console.log("Курс обучения: " + student["Курс обучения"]);
console.log("Женат ли: " + (student["Женат ли"] ? "Да" : "Нет"));
console.log("Направление: " + student.Направление);
console.log("Языки программирования: " + student["Языки программирования"]);
