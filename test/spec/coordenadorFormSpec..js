describe('Testando controllers do coordenadorFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller coordenador-form", inject(function($controller) {
        var ctrl = $controller('coordenadorFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})