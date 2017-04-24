describe('Testando controllers do cursoCtrl', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller e curso controller", inject(function($controller) {
        var ctrl = $controller('cursoCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})