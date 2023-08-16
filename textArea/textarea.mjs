
export class TextArea extends HTMLElement {
  constructor() {
    super();
  }
 
   autoHeight(elem) {
    elem.style.height = "5px";
    elem.style.height = elem.scrollHeight + "px";
  }

  connectedCallback() {
    this.innerHTML = `<textarea id="text" cols="30" rows="3"  "
     placeholder="введите несколько строк текста"></textarea>`;

     
     let text_area=this.firstChild
     let autoHeight=this.autoHeight

     function calback(){
         return    autoHeight(text_area)
     }

     let calback_1=calback(this.autoHeight)
     text_area.addEventListener("input",calback) 

  }
  

}





// export class TextArea extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.innerHTML = `<textarea id="text" cols="30" rows="3" onkeypress="${this.autoHeight(
//       "this"
//     )};" onkeyup="${this.autoHeight(
//       "this"
//     )}"
//      placeholder="введите несколько строк текста"></textarea>`;
//   }

//   autoHeight(elem) {
//     console.log(elem);
//     elem.style.height = "5px";
//     elem.style.height = elem.scrollHeight + "px";
//   }
// }
