describe('Testando controllers do listarAlunosCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller e curso controller", inject(function($controller) {
        var ctrl = $controller('listarAlunosCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})