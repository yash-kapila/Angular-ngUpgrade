import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'child-a',
  templateUrl: './components/child-a/child-a.html' 
})

export class ChildAComponent implements OnInit {
    message: string;
    childAMessage: string;
    @Output() replyToParent = new EventEmitter<string>();

    constructor (private _appService: AppService) { };

    ngOnInit () {
        this.message = '';
        this.childAMessage = '';
        this._appService.subscribeToMessageFromParent(this.messageFromParent);
    };

    // Arrow function remembers the scope. Function is removed from prototype and assigned to the instance    
    messageFromParent = (message: string) => {
        this.message = message;
    };

    reply() {
        this.replyToParent.emit(this.childAMessage);
    };
};