import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
export var CatalogComponent = (function () {
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
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.addingHero = false;
    // }
    // gotoDetail(): void {
    //   this.router.navigate(['/detail', this.selectedHero.id]);
    // }
    CatalogComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'catalog',
                    templateUrl: 'catalog.component.html'
                },] },
    ];
    /** @nocollapse */
    CatalogComponent.ctorParameters = [
        { type: Router, },
        { type: CatalogService, },
    ];
    return CatalogComponent;
}());
export var MyComponent = (function () {
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
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.addingHero = false;
    // }
    // gotoDetail(): void {
    //   this.router.navigate(['/detail', this.selectedHero.id]);
    // }
    MyComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'catalog',
                    templateUrl: 'my.component.html'
                },] },
    ];
    /** @nocollapse */
    MyComponent.ctorParameters = [
        { type: Router, },
        { type: CatalogService, },
    ];
    return MyComponent;
}());
export var WantedComponent = (function () {
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
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.addingHero = false;
    // }
    // gotoDetail(): void {
    //   this.router.navigate(['/detail', this.selectedHero.id]);
    // }
    WantedComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'catalog',
                    templateUrl: 'wanted.component.html'
                },] },
    ];
    /** @nocollapse */
    WantedComponent.ctorParameters = [
        { type: Router, },
        { type: CatalogService, },
    ];
    return WantedComponent;
}());
//# sourceMappingURL=catalog.component.js.map