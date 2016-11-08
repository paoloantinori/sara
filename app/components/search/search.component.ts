import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}