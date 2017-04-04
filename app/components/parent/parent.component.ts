import { ParentCtrl } from './parent.controller';

export class ParentComponent implements IComponentOptions {
    bindings: any;
    templateUrl: string;
    controller: any;

    constructor() {
        this.bindings = { };
        this.templateUrl = './components/parent/parent.html';
        this.controller = ParentCtrl;
    };
};