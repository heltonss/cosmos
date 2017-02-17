describe('Testando controllers da ColaboratorFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller colaborator-form", inject(function($controller) {
        var ctrl = $controller('colaboratorFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})