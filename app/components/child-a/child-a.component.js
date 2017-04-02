(function () {

    'use strict';

    angular.module('app').component('childA', {
        templateUrl: 'components/child-a/child-a.html',
        controller: 'childACtrl',
        bindings: {
            replyToParent: '&'
        }
    });

    angular.module('app').controller('childACtrl', ChildACtrl);

    ChildACtrl.$inject = ['appService'];    
    
    function ChildACtrl(appService) {
        var vm = this;

        vm.$onInit = function () {
            appService.subscribeToMessageFromParent(vm.messageFromParent);
        };

        vm.messageFromParent = function (message) {
            vm.message = message;
        };

        vm.reply = function () {
            vm.replyToParent({
                msg: vm.childAMessage
            });
        };
    };
})();