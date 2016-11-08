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
var http_1 = require('@angular/http');
var db_1 = require('../models/db');
var CatalogService = (function () {
    function CatalogService(http) {
        this.http = http;
        this.flossUrl = 'app/floss'; // URL to web api
    }
    CatalogService.prototype.getCatalog = function () {
        return Promise.resolve(db_1.DB.db);
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
    CatalogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CatalogService);
    return CatalogService;
}());
exports.CatalogService = CatalogService;
//# sourceMappingURL=catalog.service.js.map