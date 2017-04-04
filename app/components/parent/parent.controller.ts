import { AppService } from '../../services/app.service';

export class ParentCtrl {
    static $inject: string[] = ['AppService'];
    messageFromChildA: string;
    messageFromChildB: string;

    constructor(private _appService: AppService) { };

    $onInit() {
        this.messageFromChildA = '';
        this.messageFromChildB = '';
    };

    dinnerIsReady() {
        this._appService.publishMessageForChildren('Dinner is ready.');
    };

    messageFromChildAReceived(msg: string) {
        this.messageFromChildA = msg
    };

    messageFromChildBReceived(msg: string) {
        this.messageFromChildB = msg;
    };
};