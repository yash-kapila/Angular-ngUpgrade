(function () {

    'use strict';
    
    angular.module('app').component('parent', {
        templateUrl: 'components/parent/parent.html',
        controller: 'parentCtrl'
    });

    angular.module('app').controller('parentCtrl', ParentCtrl);

    ParentCtrl.$inject = ['appService'];    
    
    function ParentCtrl(appService) {
        var vm = this;

        vm.$onInit = function () {
            vm.messageFromChildA = '';
            vm.messageFromChildB = '';
        };

        vm.dinnerIsReady = function () {
            appService.publishMessageForChildren('Dinner is ready.');
        };

        vm.messageFromChildAReceived = function (msg) {
            vm.messageFromChildA = msg;
        };

        vm.messageFromChildBReceived = function (msg) {
            vm.messageFromChildB = msg;
        };
    };

})();