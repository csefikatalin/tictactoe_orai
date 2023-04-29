import Elem from "./Elem.js";
class Jatekter {
  #lepes;
  #lista=[]
  constructor() {
    this.#lepes = 0;
    this.#lista=[" "," "," "," "," "," "," "," "," "]
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(index, szuloElem);
    }
    /// vezérli a játékot
    //ő látja a 9 elemet
    //Ő látja, hogy hányadik lépésnél tartunk
    //Ő tudja megmondani, hogy ki következik.
    //Mikor kell növelni a lépésszámláót?
    //akkor, amikor rákattintunk egy elemre.
    //feliratkozunk egy saját eseményre - elemKattintas
    $(window).on("elemKattintas", (event) => {
      console.log(event.detail);
      let aktElem=event.detail
      if (this.#lepes % 2 === 0) {
        aktElem.setElem("X");
        this.#lista[aktElem.getIndex()]="X"
      } else {
        aktElem.setElem("O");
        this.#lista[aktElem.getIndex()]="O"
      }
      this.#lepes++;
      this.ellenorzes()
    });
   
  }
  ellenorzes(){
    // itt elelnőrzöm a győzelmet
 }
}

export default Jatekter;
