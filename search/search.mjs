



function inputRestriction(string) {
  if (typeof string !== "string") {
    throw Error("inputRestriction" + " string=!string");
  }

  let stringLast=string[string.length-1]

  return /[а-яё]/i.test(stringLast) && string.length <= 10;
}

export class Search extends HTMLElement {
  constructor() {
    super();
    this.arr = "аденоид академия мамонт инструмент ключ альфонс ветеринар декада линолеум камбуз Будапешт укроп баржа королевство караван бирка авиатранспорт гольф волокно камикадзе термометр полено консервы мышка пилотка жаворонок бензовоз прямоугольник ветер пудра мундштук баклажан створка жир каравелла косынка видеокассета бацилла Киев монах загс трамвай табурет Венгрия галактика баранина кадмий кишка боеголовка перекресток гармошка матрешка кузов терраса колчан плед бардак бордель штанга кондитер пансион алмаз гарнир котенок копия Лондон перископ плацдарм Иерусалим абак ребенок факс консерватория артемида канистра копье мозг жеребец витамин пыль колдун Гон Конг богиня перстень виток перчатка залог клапан коробок фигура бадья душа враг шайба поводок виселица кобель бангладеш виноград каталог".split(" ");
  }

  connectedCallback() {
    let help=this.arr.map(v=>"<p class='helpElement'>"+v+"<\p>").join("")
    this.innerHTML = `
    <div id="box-search">
    <input  id="search" type="search">
    <div id="helpBox">
      ${help}
    </div>
    </div>`;
    this.inputEvent();
  }

  inputEvent() {
    let search = document.getElementById("search");

    search.addEventListener("input", () => {
      let searchValue = search.value;

      if (!inputRestriction(search.value)) {
        search.value = searchValue.slice(0, searchValue.length - 1);
      }

      this.helps(search.value)
    });
  }

  helps(string){
    
    let help = document.getElementById("helpBox");
    help.style.pointerEvents="none"
    let  reg= new RegExp(string)
    
    let  parag=document.getElementsByClassName("helpElement")
    

    let boolen=false
    this.arr
    .forEach((v,i)=>{
      
      if(reg.test(v)&&string.length){
        parag[i].setAttribute("state","active")

        boolen=true
      parag[i].style.opacity="1"
      parag[i].style.marginTop="0px"
      parag[i].style.pointerEvents="unset"

    help.style.pointerEvents="unset"
    }
      else {
        parag[i].setAttribute("state","noActive")
        parag[i].style.opacity="0"
        parag[i].style.marginTop="-37.5px"
        parag[i].style.pointerEvents="none"

    help.style.pointerEvents="none"


      }
    })
    if(boolen) {help.style.borderColor= "rgba(0, 0, 0, 1)"}else{
      help.style.borderColor= "rgba(0, 0, 0, 0)"
    }
    if(string.length!==0) {
      help.style.pointerEvents="unset"
    }

  }


}
