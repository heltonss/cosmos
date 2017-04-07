describe('Testando controllers da estudanteFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller colaborator-form", inject(function($controller) {
        var ctrl = $controller('alunoFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})