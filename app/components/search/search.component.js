import { Component, Output, EventEmitter } from '@angular/core';
export var SearchComponent = (function () {
    function SearchComponent() {
        this.update = new EventEmitter();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.update.emit('');
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'search',
                    templateUrl: 'search.component.html'
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = [];
    SearchComponent.propDecorators = {
        'update': [{ type: Output },],
    };
    return SearchComponent;
}());
//# sourceMappingURL=search.component.js.map