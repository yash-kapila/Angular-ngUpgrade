import { ChildBCtrl } from './child-b.controller';

export class ChildBComponent implements IComponentOptions {
    bindings: any;
    templateUrl: string;
    controller: any;

    constructor() {
        this.bindings = {
            replyToParent: '&'
        };
        this.templateUrl = './components/child-b/child-b.html';
        this.controller = ChildBCtrl;
    };
};