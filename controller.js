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

  (function(){
    var min = 280, max = 95, pad_right = 5, input = document.getElementById('newQuoteInput');

    input.style.width = min+'px';
    input.onkeypress = input.onkeydown = input.onkeyup = function(){
        var input = this;
        setTimeout(function(){
            var tmp = document.createElement('div');
            tmp.style.padding = '0';
            if(getComputedStyle)
                tmp.style.cssText = getComputedStyle(input, null).cssText;
            if(input.currentStyle)
                tmp.style.cssText = input.currentStyle.cssText;
            tmp.style.width = '';
            tmp.style.position = 'absolute';
            tmp.innerHTML = input.value.replace(/&/g, "&amp;")
                                       .replace(/</g, "&lt;")
                                       .replace(/>/g, "&gt;")
                                       .replace(/"/g, "&quot;")
                                       .replace(/'/g, "&#039;")
                                       .replace(/ /g, '&nbsp;');
            input.parentNode.appendChild(tmp);
            var width = tmp.clientWidth+pad_right+1;
            tmp.parentNode.removeChild(tmp);
            if(min <= width) {
              input.style.width = max+'%';
            } else {
              input.style.width = min+'px';
            }

        }, 1);
    }
  })();

  (function(){
    var min = 225, max = 93, pad_right = 5, input = document.getElementById('newAuthorInput');

    input.style.width = min+'px';
    input.onkeypress = input.onkeydown = input.onkeyup = function(){
        var input = this;
        setTimeout(function(){
            var tmp = document.createElement('div');
            tmp.style.padding = '0';
            if(getComputedStyle)
                tmp.style.cssText = getComputedStyle(input, null).cssText;
            if(input.currentStyle)
                tmp.style.cssText = input.currentStyle.cssText;
            tmp.style.width = '';
            tmp.style.position = 'absolute';
            tmp.innerHTML = input.value.replace(/&/g, "&amp;")
                                       .replace(/</g, "&lt;")
                                       .replace(/>/g, "&gt;")
                                       .replace(/"/g, "&quot;")
                                       .replace(/'/g, "&#039;")
                                       .replace(/ /g, '&nbsp;');
            input.parentNode.appendChild(tmp);
            var width = tmp.clientWidth+pad_right+1;
            tmp.parentNode.removeChild(tmp);
            if(min <= width) {
              input.style.width = max+'%';
            } else {
              input.style.width = min+'px';
            }

        }, 1);
    }
  })();


})
