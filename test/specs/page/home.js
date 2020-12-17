
const { describe } = require('mocha');
const HomePage = require('../../pageobjects/home.page');

describe ('Home Page Feature', () =>{

   
    it('Click in search button',() =>{
        
        HomePage.open()
        HomePage.clickBtnBusqueda()

        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/')
    
    });

    it('Click in therapist and validation for focus and text into the placeholder',() =>{
        
        const messageInPlaceHolder='¿Buscas a alguien o algo en específico?'
        HomePage.open()
        HomePage.clickLabelLenguaje()
        const va=HomePage.inputBusqueda.getAttribute('placeholder')
        //homePage.inputBusqueda.isFocused()
        //console.log(homePage.inputBusqueda.isFocused()+"dafafaf")
        expect(HomePage.inputBusqueda).toBeFocused()
        //(expect(va).toHaveText(message)
        expect(va).toEqual(messageInPlaceHolder)

        //expect(HomePage.inputBusqueda.getAttribute('placeholder')).toHaveText(message)
        //console.log(HomePage.inputBusqueda.getAttribute('placeholder')+"mati")

    });    
   
        
    it('Enter text',() =>{
        
        const dataInputBusqueda= {
            inputBusqueda:'Maria'
        }

        HomePage.open()
        HomePage.enterText(dataInputBusqueda)
        HomePage.clickBtnBusqueda()

        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/search?sp=all&q=Maria')

    });



});