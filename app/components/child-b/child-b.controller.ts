import { AppService } from '../../services/app.service';

export class ChildBCtrl {
    static $inject: string[] = ['AppService'];
    message: string;
    childBMessage: string;
    replyToParent: Function;

    constructor(private _appService: AppService) {
        this.message = '';
        this.childBMessage = '';
    };

    $onInit() {
        this._appService.subscribeToMessageFromParent(this.messageFromParent);
    };

    // Arrow function remembers the scope. Function is removed from prototype and assigned to the instance
    messageFromParent = (message) => {
        this.message = message;
    };

    reply() {
        this.replyToParent({
            msg: this.childBMessage
        });
    };
};