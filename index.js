function displayAnswer(response) {
  new Typewriter("#course", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateCourses(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta8d0cd5f43b6fe4f1cd0019401obcd1";
  let context =
    "Your are a smart AI Assistant that knows the best available online programming courses. The list of courses must be provided in HTML format.Maximum 5 listed courses. Sign the list with `This is just a beginning.And it's only going to get better from here.` in <strong> element. Include links.";
  let prompt = `Tell me the most popular online programming courses about  ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let courseElement = document.querySelector("#course");
  courseElement.classList.remove("hidden");
  courseElement.innerHTML = "Generating courses for you.. please wait 👩🏼‍💻";

  axios.get(apiUrl).then(displayAnswer);
}

let programmingCourseElement = document.querySelector("#course-generator-form");
programmingCourseElement.addEventListener(`submit`, generateCourses);
