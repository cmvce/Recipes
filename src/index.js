function showRecipe(response) {
  new Typewriter("#recipes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.7,
    cursor: "",
  });
}

function getRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");

  let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
  let prompt = `Generate a recipe using ${userInput.value}`;
  let context =
    "User instructions: You are an extraordinary chef who wants to share their SHORT recipes. Make the title using <strong>.Your mission is to generate recipes and separate each line with <br/>. Make sure to follow the user instructions. Add 'All things Recipes AI' as a <strong> element AT THE END of the recipe. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipes");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating"> 🥘 Cooking ${userInput.value}...</div>`;
  axios.get(apiUrl).then(showRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", getRecipe);
