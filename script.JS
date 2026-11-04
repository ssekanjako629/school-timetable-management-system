

const lessonForm = document.getElementById("lessonForm");
const lessonList = document.getElementById("lessonList");

lessonForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const teacher = document.getElementById("teacher").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    const lesson = document.createElement("li");

    lesson.textContent =
        subject + " | " +
        teacher + " | " +
        day + " | " +
        time;

    lessonList.appendChild(lesson);

    lessonForm.reset();

    alert("Lesson added successfully!");
});
