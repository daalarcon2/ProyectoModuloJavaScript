const Page = require('./page');

class HomePage extends Page {
 
    get btnBusuqeda  () { return $('[value=Buscar]') }
    get labelLenguaje () { return $('label[for=language]') }
    get inputBusqueda () { return $('#search-input') }

   clickBtnBusqueda() {

       this.btnBusuqeda.click(); 
   }

   clickLabelLenguaje(){

        this.labelLenguaje.click();

   }

   enterText(dataforPlaceHolder){

        this.inputBusqueda.setValue(dataforPlaceHolder.inputBusqueda);
   }


    /*focusMethod (a){

        this.labelLenguaje.click();
 
        //return this.inputBusqueda.isFocused();
       
     }*/

    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
