describe('Testando controllers de alerta de disciplina', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller gestão de disciplina", inject(function($controller) {
        var ctrl = $controller('disciplinaAlertaCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})