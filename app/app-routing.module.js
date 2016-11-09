import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogComponent, MyComponent, WantedComponent } from './components/catalog/catalog.component';
var routes = [
    {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full'
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'wanted',
        component: WantedComponent
    },
    {
        path: 'my',
        component: MyComponent
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = [];
    return AppRoutingModule;
}());
export var routedComponents = [CatalogComponent];
//# sourceMappingURL=app-routing.module.js.map