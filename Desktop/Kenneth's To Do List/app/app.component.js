System.register(['angular2/core', './to-dolist.component'], function(exports_1, context_1) {
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
    var core_1, to_dolist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (to_dolist_component_1_1) {
                to_dolist_component_1 = to_dolist_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n            This is my To-do list:\n            <to-dolist></to-dolist>\n    ",
                        directives: [to_dolist_component_1.ToDoListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLGlGQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUVsQyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgVG9Eb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3RvLWRvbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIFRoaXMgaXMgbXkgVG8tZG8gbGlzdDpcbiAgICAgICAgICAgIDx0by1kb2xpc3Q+PC90by1kb2xpc3Q+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbVG9Eb0xpc3RDb21wb25lbnRdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnR7XG4gICAgXG59XG5cbiJdfQ==
