describe('TestTwoController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestTwoController', {
      $scope: $scope
    });
  }));

	it('initially has a total', function(){
		assert.equal($scope.total, 6);
	});

	it('initally has items', function(){
		assert.isArray($scope.items);
		assert.deepEqual($scope.items, [1,2,3]);
	});

	it('the `add` function updates the `total` and `items` array when a value is added', function () {
		$scope.newItem = 7;
		$scope.add();
		assert.equal($scope.total, 13);
		assert.deepEqual($scope.items, [1, 2, 3, 7]);
	});
	
	it('does not update the `total` and `items` array when an empty value is added', function () {
		$scope.newItem = undefined;
		$scope.add();
		assert.equal($scope.total, 6);
		assert.deepEqual($scope.items, [1, 2, 3]);
		$scope.newItem = 22;
		$scope.add();
		assert.equal($scope.total, 28);
		assert.deepEqual($scope.items, [1, 2, 3, 22]);
	});

});
