describe('Testando controllers de gestão de disciplina', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller gestão de disciplina", inject(function($controller) {
        var ctrl = $controller('gestaoDisciplinaCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})