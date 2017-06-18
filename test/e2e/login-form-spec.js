describe("testando o formularido de login passando dados de acesso", function() {
    it("Testando um formulário", function() {
        browser.ignoreSynchronization = false;
        browser.get("http://localhost:3000/")

        //encontrando o elemento com o model login
        element(by.model('user.login')).sendKeys('user');
        element(by.model('user.password')).sendKeys('@xpto123');

        //encontrando o button e acionando o click
        element(by.id('click')).click();

        expect(browser.getTitle()).toEqual("COSMOS - Sistema de Gestão Escolar");
    })

})