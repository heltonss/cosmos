describe('Testando controllers do dashCursoControllers', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller de dasCursoCtrl", inject(function($controller) {
        var ctrl = $controller('dashCursoCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})