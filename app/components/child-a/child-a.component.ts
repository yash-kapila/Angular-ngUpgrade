import { ChildACtrl } from './child-a.controller';

export class ChildAComponent implements IComponentOptions {
    bindings: any;
    templateUrl: string;
    controller: any;

    constructor() {
        this.bindings = {
            replyToParent: '&'
        };
        this.templateUrl = './components/child-a/child-a.html';
        this.controller = ChildACtrl;
    };
};