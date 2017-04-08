describe('Testando controllers do professorFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller professor-form", inject(function($controller) {
        var ctrl = $controller('professorFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})