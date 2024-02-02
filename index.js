function displayAnswer(response) {
  let answer = document.querySelector("#course");
  answer.innerHTML = response.data.answer;

  new Typewriter("#course", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateCourses(event) {
  event.preventDefault();
  let apiKey = "ta8d0cd5f43b6fe4f1cd0019401obcd1";
  let context =
    "Your are a amrt AI Assistant that knows the best available online programming courses. The list of courses must be provided in HTML format. Example: <li>Course</li>";
  let prompt =
    "Tell me the most popular online programming courses including links.Maximum 11 listed courses. Sign the list with `This is just a beginning.And it's only going to get better from here.` in <strong> element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let courseElement = document.querySelector("#course");
  courseElement.innerHTML = "Generating courses for you.. please wait 👩🏼‍💻";
  courseElement.style.display = `block`;
  console.log("called the AI api");
  axios.get(apiUrl).then(displayAnswer);
}

let programmingCourseElement = document.querySelector("#course-generator-form");
programmingCourseElement.addEventListener(`submit`, generateCourses);
