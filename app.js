(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunchItems = function () {
      if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first';
      } else {
        var items = $scope.lunchItems.split(',');
        var itemCount = countNonEmptyItems(items);
        if (itemCount <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };

    function countNonEmptyItems(items) {
      var count = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== '') {
          count++;
        }
      }
      return count;
    }
  }
})();
