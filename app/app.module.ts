import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

// import './rxjs-extensions';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CatalogService } from './services/catalog.service';
import { CatalogComponent, MyComponent, WantedComponent } from './components/catalog/catalog.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
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
})
export class AppModule { }
