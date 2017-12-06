import {Component} from 'angular2/core';

@Component({
    selector: 'to-dolist',
    template:`
    <ul>
    <li *ngFor= "#toDo of myToDo"
    (click)="onItemClicked(toDo)">
    {{ toDo.name }}
    </li>
    </ul>
    <input type="text" [(ngModel)]="selected.name">
    <button (click)="onDeleteItem()"> Edit toDo </button><br>
    <input type="text" [(ngModel)]="selected.name">
    <button (click)="onDeleteItem()"> Delete toDo </button><br>
    <input type="text" #toDo>
    <button (click)="onAddItem(toDo)"> Add toDo </button>
    `,

})

export class ToDoListComponent{

    public myToDo= [
        {name: "Read"}, 
        {name: "Travel"}, 
        {name: "Code"},
        {name:  "Sleep"},
        {name:  "Repeat"},
    ];
    public selected={name:" "};

    onItemClicked(toDo){
        this.selected=toDo;
    }

    onAddItem(toDo){
        this.myToDo.push({ name: toDo.value });
    }

    onDeleteItem()
    {
        this.myToDo.splice( this.myToDo.indexOf(this.selected),1);
    }

}