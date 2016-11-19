import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Floss } from '../../models/floss';
import { DB } from '../../models/db';
import { CatalogService } from '../../services/catalog.service';

@Component({
  moduleId: module.id,
  selector: 'catalog',
  templateUrl: 'catalog.component.html'
})
export class CatalogComponent implements OnInit {
  catalog: Floss[];
  currentView: Floss[];
  error: any;
  term: string;

  constructor(
    private router: Router,
    private catalogService: CatalogService) { }

  filter(term: string){
    console.log("__" + term);
    if(term.trim().length > 0){
      this.currentView = this.catalog.filter(floss => floss.name.toLowerCase().indexOf(term.toLowerCase()) >= 0);
    } else {
      this.currentView = this.catalog;
    }
  }
  getCatalog(): void {
    this.catalogService
      .getCatalog()
      .then(catalog => {
        this.catalog = catalog;
        this.currentView = catalog;
    })
      .catch(error => this.error = error);
  }

  addFloss(floss: Floss, event: any): void {
    this.catalogService.addFlossTo(floss, 'my');
  }
  wantFloss(floss: Floss, event: any): void {
    this.catalogService.addFlossTo(floss, 'want');
  }
  isFlossIn(floss: Floss, group: string) : boolean {
    return this.catalogService.isFlossIn(floss, group);
  }
  ngOnInit(): void {
    this.getCatalog();
  }
}



@Component({
  moduleId: module.id,
  selector: 'catalog',
  templateUrl: 'my.component.html'
})
export class MyComponent implements OnInit {
  catalog: Floss[];
  error: any;

  constructor(
    private router: Router,
    private catalogService: CatalogService) { }

  getCatalog(): void {
    this.catalog = this.catalogService.load("my");
 }

  addFloss(event: any): void {
    this.catalog.push({ dmc: 42, name: 'nuovo' });
  }

  // close(savedHero: Hero): void {
  //   this.addingHero = false;
  //   if (savedHero) { this.getHeroes(); }
  // }

  deleteFloss(floss: Floss, group: string, event: any): void {
    console.log("Deleted " + floss.name);
    event.stopPropagation();
    this.catalogService.deleteFloss(floss, group);
    this.getCatalog();
  }

  ngOnInit(): void {
    this.getCatalog();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.addingHero = false;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
}




@Component({
  moduleId: module.id,
  selector: 'catalog',
  templateUrl: 'wanted.component.html'
})
export class WantedComponent implements OnInit {
  catalog: Floss[];
  error: any;

  constructor(
    private router: Router,
    private catalogService: CatalogService) { }

  getCatalog(): void {
    this.catalog = this.catalogService.load("want");
 }

  addFloss(event: any): void {
    this.catalog.push({ dmc: 42, name: 'nuovo' });
  }

  // close(savedHero: Hero): void {
  //   this.addingHero = false;
  //   if (savedHero) { this.getHeroes(); }
  // }

  deleteFloss(floss: Floss, group: string, event: any): void {
    console.log("Deleted " + floss.name);
    event.stopPropagation();
    this.catalogService.deleteFloss(floss, group);
    this.getCatalog();
  }

  ngOnInit(): void {
    this.getCatalog();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.addingHero = false;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
}
