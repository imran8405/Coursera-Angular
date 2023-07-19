(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController);

  ToBuyController.$inject = ['$scope'];

  function ToBuyController($scope) {
    var buyCtrl = this;

    buyCtrl.toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "apples", quantity: 5 },
      { name: "milk", quantity: 2 },
      { name: "chips", quantity: 3 },
      { name: "bread", quantity: 1 }
    ];

    buyCtrl.alreadyBoughtList = [];

    buyCtrl.buyItem = function (index) {
      var item = buyCtrl.toBuyList.splice(index, 1)[0];
      buyCtrl.alreadyBoughtList.push(item);
    };
  }
})();
