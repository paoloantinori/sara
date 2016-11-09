"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var catalog_service_1 = require('./catalog.service');
var MyComponent = (function () {
    function MyComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    MyComponent.prototype.getCatalog = function () {
        this.catalog = this.catalogService.load("my");
    };
    MyComponent.prototype.addFloss = function (event) {
        this.catalog.push({ dmc: 42, name: 'nuovo' });
    };
    // close(savedHero: Hero): void {
    //   this.addingHero = false;
    //   if (savedHero) { this.getHeroes(); }
    // }
    MyComponent.prototype.deleteFloss = function (floss, group, event) {
        console.log("Deleted " + floss.name);
        event.stopPropagation();
        this.catalogService.deleteFloss(floss, group);
        this.getCatalog();
    };
    MyComponent.prototype.ngOnInit = function () {
        this.getCatalog();
    };
    MyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my',
            templateUrl: 'my.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, catalog_service_1.CatalogService])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my.component.js.map