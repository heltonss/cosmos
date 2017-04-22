describe('Testando controllers do semestreFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller e materia-form", inject(function($controller) {
        var ctrl = $controller('semestreFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})