describe("testando o login", function() {
    it("deve pegar o titulo da pagina", function() {
        //abrindo a página
        browser.get('http://localhost:3000/');


        // it('should have a title', function() {
        expect(browser.getTitle()).toEqual('COSMOS - Sistema de Gestão Escolar');
        //     // expect(browser.getTitle()).toEqual('');
        // });


        // //encontrando o elemento com o model login
        // element(by.model('login').sendKeys('helton'));
        // element(by.model('password').sendKeys('123456'));

        // //encontrando o button e acionando o click
        // element(by.class('click')).click();

        // //identificar se encontrou a rota secretaria
        // browser.get("http://localhost:3000/#!/secretaria")
        // expect(browser.getTitle()).toEqual('COSMOS - Sistema de Gestão Escolar')
    });
});