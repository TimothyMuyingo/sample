const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const submitButton = document.getElementById("submit-button");
const aside = document.getElementById("sidebar");
const commentForm = document.getElementById("comment-form");
//forms
submitButton.addEventListener("click", $event => {
  event.preventDefault();
  aside.textContent =
    "Hi" + " " + firstNameInput.value + " " + lastNameInput.value;
  commentForm.reset();
});
