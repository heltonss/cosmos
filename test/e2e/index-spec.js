describe("testando a tela de  login", function() {
    it("deve pegar o titulo da pagina", function() {
        //abrindo a página
        browser.get('http://localhost:3000/');

        // it('should have a title', function() {
        expect(browser.getTitle()).toEqual('COSMOS - Sistema de Gestão Escolar');
        //     // expect(browser.getTitle()).toEqual('');
        // });

    });
});