import { AppService } from '../../services/app.service';

export class ChildACtrl {
    static $inject: string[] = ['AppService'];
    message: string;
    childAMessage: string;
    replyToParent: Function

    constructor(private _appService: AppService) { 
        this.message = '';
        this.childAMessage = '';
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
            msg: this.childAMessage
        });
    };
};