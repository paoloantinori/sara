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
var catalog_service_1 = require('../../services/catalog.service');
var CatalogComponent = (function () {
    function CatalogComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    CatalogComponent.prototype.filter = function (term) {
        console.log("__" + term);
        if (term.trim().length > 0) {
            this.currentView = this.catalog.filter(function (floss) { return floss.name.indexOf(term) >= 0; });
        }
        else {
            this.currentView = this.catalog;
        }
    };
    CatalogComponent.prototype.getCatalog = function () {
        var _this = this;
        this.catalogService
            .getCatalog()
            .then(function (catalog) {
            _this.catalog = catalog;
            _this.currentView = catalog;
        })
            .catch(function (error) { return _this.error = error; });
    };
    CatalogComponent.prototype.addFloss = function (floss, event) {
        this.catalogService.addFlossTo(floss, 'my');
    };
    CatalogComponent.prototype.wantFloss = function (floss, event) {
        this.catalogService.addFlossTo(floss, 'want');
    };
    // close(savedHero: Hero): void {
    //   this.addingHero = false;
    //   if (savedHero) { this.getHeroes(); }
    // }
    CatalogComponent.prototype.ngOnInit = function () {
        this.getCatalog();
    };
    CatalogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalog',
            templateUrl: 'catalog.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, catalog_service_1.CatalogService])
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
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
            selector: 'catalog',
            templateUrl: 'my.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, catalog_service_1.CatalogService])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
var WantedComponent = (function () {
    function WantedComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    WantedComponent.prototype.getCatalog = function () {
        this.catalog = this.catalogService.load("want");
    };
    WantedComponent.prototype.addFloss = function (event) {
        this.catalog.push({ dmc: 42, name: 'nuovo' });
    };
    // close(savedHero: Hero): void {
    //   this.addingHero = false;
    //   if (savedHero) { this.getHeroes(); }
    // }
    WantedComponent.prototype.deleteFloss = function (floss, group, event) {
        console.log("Deleted " + floss.name);
        event.stopPropagation();
        this.catalogService.deleteFloss(floss, group);
        this.getCatalog();
    };
    WantedComponent.prototype.ngOnInit = function () {
        this.getCatalog();
    };
    WantedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalog',
            templateUrl: 'wanted.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, catalog_service_1.CatalogService])
    ], WantedComponent);
    return WantedComponent;
}());
exports.WantedComponent = WantedComponent;
//# sourceMappingURL=catalog.component.js.map