
const { describe } = require('mocha');
const HomePage = require('../../pageobjects/home.page');

describe ('Home Page Feature', () =>{

    beforeEach( ()=> {
        
        browser.maximizeWindow()


    })
   
    it('Click in search button',() =>{
        
        HomePage.open()
        HomePage.clickBtnBusqueda()

        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/')
    
    });

    it('Click in therapist and validation for focus and text into the placeholder',() =>{
        
        const messageInPlaceHolder='¿Buscas a alguien o algo en específico?'
        HomePage.open()
        HomePage.clickLabelLenguaje()
        const locatorenpagina=HomePage.inputBusqueda.getAttribute('placeholder')
        expect(HomePage.inputBusqueda).toBeFocused()
        expect(locatorenpagina).toEqual(messageInPlaceHolder)

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