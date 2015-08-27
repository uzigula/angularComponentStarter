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

    describe("validate counter", function() {
      var _$httpBackend, api;
      beforeEach(module("testExamComponentApiServiceTests"));
      beforeEach(inject(function($httpBackend, examComponentApi) {
        _$httpBackend = $httpBackend;
        api = examComponentApi;
      }));
      it("should get 11", function() {
        debugger;
        var response = _$httpBackend.when(SetupTestData.httpMethod,SetupTestData.httpUrl)
                  .respond(SetupTestData.response);
        _$httpBackend.flush();
        expect(api.getCurrentCount()).toBe(SetupTestData.response.count);
      });
    });
    angular.noop(Tests);

  })(Tests = StarterAngularComponent.Tests || (StarterAngularComponent.Tests = {}));
})(StarterAngularComponent || (StarterAngularComponent = {}));
