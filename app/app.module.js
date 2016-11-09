import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CatalogService } from './services/catalog.service';
import { CatalogComponent, MyComponent, WantedComponent } from './components/catalog/catalog.component';
import { SearchComponent } from './components/search/search.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        AppRoutingModule,
                        HttpModule
                    ],
                    declarations: [
                        AppComponent,
                        routedComponents,
                        CatalogComponent,
                        MyComponent,
                        WantedComponent,
                        SearchComponent
                    ],
                    providers: [
                        CatalogService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map