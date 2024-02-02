function generateCourses(event) {
  event.preventDefault();

  new Typewriter("#course", {
    strings: "The list of courses will be listed here:",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

let programmingCourseElement = document.querySelector("#course-generator-form");
programmingCourseElement.addEventListener(`submit`, generateCourses);
