import angular from 'angular';

export class AppService {
    message: Function[];

    constructor() {
        this.message = [];
    };

    publishMessageForChildren(msg: string) {
        if (this.message.length) {
            angular.forEach(this.message, (callbackElement) => {
                callbackElement(msg);
            });
        } else {
            return;
        }
    };

    subscribeToMessageFromParent(callback: Function) {
        this.message.push(callback);
    };
};