function toggleText() {
  let button = document.querySelector('[class="toggle-text-button"]');
  let text = document.querySelector('[id="text"]');

  button.onclick = () => {
    text.hidden = text.hidden === false;
  };
}
