/**
* Usage
*
* <ng-prism class="language-css">
*      body {
*         color: red;
*      }
* </ng-prism>
*
* the files prismjs and prism css must be included in HTML, use class "language-XXX" to specify language
* */
angular.module('yoTatumimApp').directive('ngPrism', ['$interpolate', function () {
       'use strict';
       return {
           restrict: 'E',
           template: '<pre><code ng-transclude></code></pre>',
           replace: true,
           transclude: true,
           link: function () {
              Prism.highlightAll();
           }
       };
   }]);
