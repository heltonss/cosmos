describe("Testando o cadastro do coordenador", function() {
    it("Testando um formulário", function() {
        browser.ignoreSynchronization = false;
        browser.get("http://localhost:3000/#!/cadastro-coordenador")


        //encontrando o button e acionando o click
        element(by.css('click')).click();

        expect(browser.getTitle()).toEqual("COSMOS - Sistema de Gestão Escolar");
    })

})