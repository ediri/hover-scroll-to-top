describe('Unit testing scrolltotop', function () {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('scrollToTop'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Render the element', function () {
        var element = $compile("<a scrolltotop></a>")($rootScope);
        $rootScope.$apply();
        element.triggerHandler('click');
    });
});