function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.getElementById("text");

  button.addEventListener("click", () => {
    if (text.hidden != true) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  });
}
