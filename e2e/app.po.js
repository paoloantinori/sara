"use strict";
var protractor_1 = require('protractor');
var SaraSEmbroderyPage = (function () {
    function SaraSEmbroderyPage() {
    }
    SaraSEmbroderyPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    SaraSEmbroderyPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return SaraSEmbroderyPage;
}());
exports.SaraSEmbroderyPage = SaraSEmbroderyPage;
//# sourceMappingURL=app.po.js.map