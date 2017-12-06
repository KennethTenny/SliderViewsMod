import {Component} from 'angular2/core';
import { ToDoListComponent } from './to-dolist.component';

@Component({
    selector: 'app',
    template: `
            This is my To-do list:
            <to-dolist></to-dolist>
    `,
    directives: [ToDoListComponent]

})

export class AppComponent{
    
}

