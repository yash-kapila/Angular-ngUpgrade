import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'child-b',
  templateUrl: './components/child-b/child-b.html' 
})

export class ChildBComponent implements OnInit { 
    message: string;
    childBMessage: string;
    @Output() replyToParent = new EventEmitter<string>();

    constructor (private _appService: AppService) { };

    ngOnInit () {
        this.message = '';
        this.childBMessage = '';
        this._appService.subscribeToMessageFromParent(this.messageFromParent);
    };

    // Arrow function remembers the scope. Function is removed from prototype and assigned to the instance    
    messageFromParent = (message: string) => {
        this.message = message;
    };

    reply() {
        this.replyToParent.emit(this.childBMessage);
    };
};