import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent, MyComponent, WantedComponent } from './components/catalog/catalog.component';

const routes: Routes = [
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
  },
    { path: '', component: CatalogComponent },
    { path: '**', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ CatalogComponent ];
