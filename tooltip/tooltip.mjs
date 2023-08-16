export class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div id='tooltip'>Наведи на меня))
    </div>`;

    document.addEventListener("mousemove", function(event) {
      
      if(event.target.id=="tooltip"){
        let idElement=document.getElementById("tooltip")
        idElement.innerHTML = `<div id='tooltip'>Наведи на меня))
    <span class="tooltiptext">Tooltip</span>
  </div>`

} else{
    console.log(event.target.id,1);
    let idElement=document.getElementById("tooltip")

    idElement.innerHTML = `<div id='tooltip'>Наведи на меня))
    </div>`;
  }



    });

    
  }
}
