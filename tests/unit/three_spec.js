describe('TestThreeController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestThreeController', {
      $scope: $scope
    });
  }));

  it('initially has a modalNumber', function () {
    assert.equal($scope.modalNumber, 1);
  });

  it('updates the `modalNumber` when a value is added', function () {
    $scope.changeModalText();
    assert.equal($scope.modalNumber, 2);
    $scope.changeModalText();
    assert.equal($scope.modalNumber, 3);
  });

});
