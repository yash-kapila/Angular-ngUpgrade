import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    message: Function[];

    constructor () {
        this.message = [];
    }

    publishMessageForChildren(msg: string) {
        if (this.message.length) {
            this.message.forEach(callbackElement => {
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