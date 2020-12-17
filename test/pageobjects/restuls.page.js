const Page = require('./page');


class HomePage extends Page {
 
    get labelEspecialidadFisica () { return $('div.switch-field > a:nth-child(1)') }
    get labelEspecialidadLenguaje() { return $('div.switch-field > a:nth-child(2)') }
    get labelEspecialidadOcupacional() { return $('div.switch-field > a:nth-child(3)') }
    get inputResultadosBusqueda() { return $('input.form-control') }
    get btnBusuqeda() { return $('[value=Buscar]') }
    get nombreEspecialistaMaria() { return $('div.container.margin_60_35 > div > div > div > h3') }
    get listmapaBtn() { return $('a > i.icon-th-list') }
    get map () { return $('div#map') }


    cambioUrls(icase){

        switch(icase) {
            case 0:
                this.labelEspecialidadFisica.click()
              break;
            case 1:
                this.labelEspecialidadLenguaje.click()
              break;
            case 2:
                this.labelEspecialidadOcupacional.click()
            break;
        }

    }

    enterText(dataInput){

        this.inputResultadosBusqueda.setValue(dataInput.inputBusqueda);
   }

   clickBtnBusqueda() {

        this.btnBusuqeda.click(); 
    }

    ClickonMap(){

        this.listmapaBtn.click();
    
    }
    
    open () {
        return super.open('#/search');
    }
}

module.exports = new HomePage();

