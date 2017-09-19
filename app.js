(function() {
  'use strict';
  angular.module('myApp',[])
  .controller('myController', myController);
  myController.$inject = ["$scope", "$filter"];
  function myController($scope, $filter) {

    $scope.message = "";
    var output= $filter('lowercase');
    $scope.filterMessage =output("HELLO");
    // button action which checkItTooMuch for input item list for getter then
    // 3 element.
    $scope.checkItTooMuch=function() {

      $scope.message = checkingTooMuch($scope.items);
      // first get the input item list and call the function
      // var isItTooMuch = checkingTooMuch($scope.items);
      // if (isItTooMuch){
      //   console.log("Yes it is too much value");
      // }
      // else {
      //   console.log("it's not too much value");
      // }
    };

    function checkingTooMuch(itemsSeparatedByComma) {
      if (itemsSeparatedByComma) {
        var countingItem = itemsSeparatedByComma.split(',');
        // console.log(angular.isArray(countingItem));
        if(countingItem.length>3){
          // Too many items
          return "Too Much !!";
        }
        else {
          // Items is okey
          return "Enjoy !!";
        }

      } else {
        return "No Item input";
      }
    }



  }

})();
