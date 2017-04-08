describe('Testando controllers do diretorFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller diretor-form", inject(function($controller) {
        var ctrl = $controller('diretorFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})