var StarterAngularComponent;
(function(StarterAngularComponent) {
  "use strict";
  var Tests;
  (function(Tests) {

    var SetupTestData = (function() {
      function SetupTestData() {}
      SetupTestData.app = angular.module("testExamComponentApiServiceTests", ["starter.angular.component"]);
      SetupTestData.httpUrl = '/demo/getStoredCount.json';
      SetupTestData.response = {count : 11};
      SetupTestData.httpMethod = 'GET';
      return SetupTestData;
    })();

    describe("showMoreOrLess directive", function() {
      var _$compile, _$rootScope, _$timeout;
      beforeEach(module("testShowMoreOrLess"));
      beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        api = $injector.get('$examComponentApi');
      }));
      it("should get 10", function() {
        response = $httpBackend.when(SetupTestData.httpMethod,SetupTestData.httpUrl)
                  .respond(SetupTestData.response);

        expect(api.getCurrentCount()).toBe(SetupTestData.response.count);
      });
    });
    angular.noop(Tests);

  })(Tests = StarterAngularComponent.Tests || (StarterAngularComponent.Tests = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
