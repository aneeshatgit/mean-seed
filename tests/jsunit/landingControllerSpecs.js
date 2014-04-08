describe('landing controller', function(){
	var $scope, $location, $rootScope, createController, $httpBackend, $http;

	beforeEach(module('seed'));
	beforeEach(inject(function($injector) {
        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
        $http= $injector.get('$http');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');
        $httpBackend.expectGET("/getsampledata").respond({data: 
            [{sampleName: "one"}, {sampleName: "two"}, {sampleName: "three"}]});

        createController = function() {
            return $controller('landingController', {
                '$scope': $scope
            });
        };
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('loads existing employees', function() {
        var controller = createController();
        $httpBackend.flush();
        expect($scope.names.length).toBe(3);
    });


    it('saves a new employee', function() {
        var controller = createController();
        $scope.eName = "Some Name";
        //$httpBackend.flush();
        //$scope.$apply();
        $httpBackend.expectPOST("/addsampledata", {name: $scope.eName}).respond({});
        $scope.addName();
        $httpBackend.flush();
        expect($scope.names.length).toBe(4);
    });


});
