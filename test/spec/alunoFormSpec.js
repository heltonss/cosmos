describe('Testando controllers da alunoFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller ealuno-form", inject(function($controller) {
        var ctrl = $controller('alunoFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})