(function () {

    'use strict';
    
    angular.module('app').component('childB', {
        templateUrl: 'components/child-b/child-b.html',
        controller: 'childBCtrl',
        bindings: {
            replyToParent: '&'
        }
    });

    angular.module('app').controller('childBCtrl', ChildBCtrl);

    ChildBCtrl.$inject = ['appService'];    
    
    function ChildBCtrl(appService) {
        var vm = this;

        vm.$onInit = function () {
            appService.subscribeToMessageFromParent(vm.messageFromParent);
        };

        vm.messageFromParent = function (message) {
            vm.message = message;
        };

        vm.reply = function () {
            vm.replyToParent({
                msg: vm.childBMessage
            });
        };
    };
})();