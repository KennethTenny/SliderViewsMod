System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ToDoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToDoListComponent = (function () {
                function ToDoListComponent() {
                    this.myToDo = [
                        { name: "Read" },
                        { name: "Travel" },
                        { name: "Code" },
                        { name: "Sleep" },
                        { name: "Repeat" },
                    ];
                    this.selected = { name: " " };
                }
                ToDoListComponent.prototype.onItemClicked = function (toDo) {
                    this.selected = toDo;
                };
                ToDoListComponent.prototype.onAddItem = function (toDo) {
                    this.myToDo.push({ name: toDo.value });
                };
                ToDoListComponent.prototype.onDeleteItem = function () {
                    this.myToDo.splice(this.myToDo.indexOf(this.selected), 1);
                };
                ToDoListComponent = __decorate([
                    core_1.Component({
                        selector: 'to-dolist',
                        template: "\n    <ul>\n    <li *ngFor= \"#toDo of myToDo\"\n    (click)=\"onItemClicked(toDo)\">\n    {{ toDo.name }}\n    </li>\n    </ul>\n    <input type=\"text\" [(ngModel)]=\"selected.name\">\n    <button (click)=\"onDeleteItem()\"> Edit toDo </button><br>\n    <input type=\"text\" [(ngModel)]=\"selected.name\">\n    <button (click)=\"onDeleteItem()\"> Delete toDo </button><br>\n    <input type=\"text\" #toDo>\n    <button (click)=\"onAddItem(toDo)\"> Add toDo </button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToDoListComponent);
                return ToDoListComponent;
            }());
            exports_1("ToDoListComponent", ToDoListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvLWRvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7b0JBRVcsV0FBTSxHQUFFO3dCQUNYLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQzt3QkFDZCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7d0JBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQzt3QkFDZCxFQUFDLElBQUksRUFBRyxPQUFPLEVBQUM7d0JBQ2hCLEVBQUMsSUFBSSxFQUFHLFFBQVEsRUFBQztxQkFDcEIsQ0FBQztvQkFDSyxhQUFRLEdBQUMsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLENBQUM7Z0JBZS9CLENBQUM7Z0JBYkcseUNBQWEsR0FBYixVQUFjLElBQUk7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQscUNBQVMsR0FBVCxVQUFVLElBQUk7b0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsd0NBQVksR0FBWjtvQkFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBekNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBQyw0ZEFhUjtxQkFFSixDQUFDOztxQ0FBQTtnQkEwQkYsd0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELGlEQXdCQyxDQUFBIiwiZmlsZSI6InRvLWRvbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG8tZG9saXN0JyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgPHVsPlxuICAgIDxsaSAqbmdGb3I9IFwiI3RvRG8gb2YgbXlUb0RvXCJcbiAgICAoY2xpY2spPVwib25JdGVtQ2xpY2tlZCh0b0RvKVwiPlxuICAgIHt7IHRvRG8ubmFtZSB9fVxuICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkLm5hbWVcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZUl0ZW0oKVwiPiBFZGl0IHRvRG8gPC9idXR0b24+PGJyPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWQubmFtZVwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlSXRlbSgpXCI+IERlbGV0ZSB0b0RvIDwvYnV0dG9uPjxicj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdG9Ebz5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZEl0ZW0odG9EbylcIj4gQWRkIHRvRG8gPC9idXR0b24+XG4gICAgYCxcblxufSlcblxuZXhwb3J0IGNsYXNzIFRvRG9MaXN0Q29tcG9uZW50e1xuXG4gICAgcHVibGljIG15VG9Ebz0gW1xuICAgICAgICB7bmFtZTogXCJSZWFkXCJ9LCBcbiAgICAgICAge25hbWU6IFwiVHJhdmVsXCJ9LCBcbiAgICAgICAge25hbWU6IFwiQ29kZVwifSxcbiAgICAgICAge25hbWU6ICBcIlNsZWVwXCJ9LFxuICAgICAgICB7bmFtZTogIFwiUmVwZWF0XCJ9LFxuICAgIF07XG4gICAgcHVibGljIHNlbGVjdGVkPXtuYW1lOlwiIFwifTtcblxuICAgIG9uSXRlbUNsaWNrZWQodG9Ebyl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQ9dG9EbztcbiAgICB9XG5cbiAgICBvbkFkZEl0ZW0odG9Ebyl7XG4gICAgICAgIHRoaXMubXlUb0RvLnB1c2goeyBuYW1lOiB0b0RvLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIG9uRGVsZXRlSXRlbSgpXG4gICAge1xuICAgICAgICB0aGlzLm15VG9Eby5zcGxpY2UoIHRoaXMubXlUb0RvLmluZGV4T2YodGhpcy5zZWxlY3RlZCksMSk7XG4gICAgfVxuXG59Il19
