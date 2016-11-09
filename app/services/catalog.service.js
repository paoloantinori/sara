import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DB } from '../models/db';
export var CatalogService = (function () {
    function CatalogService(http) {
        this.http = http;
        this.flossUrl = 'app/floss'; // URL to web api
    }
    CatalogService.prototype.getCatalog = function () {
        return Promise.resolve(DB.db);
    };
    CatalogService.prototype.getFloss = function (id) {
        return this.getCatalog()
            .then(function (catalog) { return catalog.find(function (floss) { return floss.dmc === id; }); });
    };
    CatalogService.prototype.deleteFloss = function (floss, group) {
        var my = this.load(group);
        if (!my) {
            my = [];
        }
        var newArr = my.filter(function (value) { return value.dmc != floss.dmc; });
        console.log(newArr);
        this.store(group, newArr);
    };
    CatalogService.prototype.addFlossTo = function (floss, group) {
        var collection = this.load(group);
        if (!collection) {
            collection = [];
        }
        var found = collection.find(function (value) { return value.dmc === floss.dmc; });
        if (found)
            return;
        console.log(collection);
        collection.push(floss);
        this.store(group, collection);
    };
    CatalogService.prototype.store = function (name, data) {
        var localData = localStorage.getItem('sara');
        if (localData) {
            localData = JSON.parse(localData);
        }
        else {
            localData = {};
        }
        localData[name] = data;
        localStorage.setItem('sara', JSON.stringify(localData));
    };
    CatalogService.prototype.load = function (name) {
        var data = JSON.parse(localStorage.getItem('sara'));
        if (!data) {
            return undefined;
        }
        if (name) {
            if (data[name]) {
                return data[name];
            }
            else {
                return undefined;
            }
        }
        return data;
    };
    CatalogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CatalogService.ctorParameters = [
        { type: Http, },
    ];
    return CatalogService;
}());
//# sourceMappingURL=catalog.service.js.map