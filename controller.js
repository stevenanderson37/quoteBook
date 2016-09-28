angular.module('quoteBook')
.controller('mainController', function($scope, mainService) {
  // $scope.thisAppIsBroken = "This angular app is working";
  $scope.quotes = mainService.getData();

  $scope.deleteMe = function(textToDelete) {
    mainService.removeData(textToDelete);
  }

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    };
    if (mainService.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };

})
