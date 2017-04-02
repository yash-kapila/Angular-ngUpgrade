(function () {

    'use strict';
    
    angular.module('app').service('appService', AppService);

    function AppService() {
        this.message = [];

        this.publishMessageForChildren = function (msg) {
            if (this.message.length) {
                angular.forEach(this.message, function (callbackElement) {
                    callbackElement(msg);
                })
            } else {
                return;
            }
        };

        this.subscribeToMessageFromParent = function (callback) {
            this.message.push(callback); 
        };
    };
})();