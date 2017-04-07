describe('Testando controllers do ColaboradorFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller colaborador-form", inject(function($controller) {
        var ctrl = $controller('colaboradorFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})