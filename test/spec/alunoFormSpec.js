describe('Testando controllers do alunoFormCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller e aluno-form", inject(function($controller) {
        var ctrl = $controller('alunoFormCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})