export class Dropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<div>
    <button id='btn'>Click me</button>
      <p class="done"></p>
      </div>`;

    let par = document.querySelector(".done");
    let button = document.getElementById("btn");

    button.addEventListener("click", function () {
      par.style.display = "block";
      par.innerHTML = `<ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
  </ul>`;
    });
  }
}
