describe('Testando controllers da session', function() {
    var ctrl, scope;
    beforeEach(module('appCosmos'));

    it("controller session", inject(function($controller) {
        var ctrl = $controller('sessionCtrl', {});
        expect(ctrl).toBeDefined();
    }))
})