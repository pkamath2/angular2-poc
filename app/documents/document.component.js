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
var document_service_1 = require('./document.service');
var DocumentComponent = (function () {
    function DocumentComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentComponent.prototype.getData = function () {
        var _this = this;
        this.documentService.getDocuments().then(function (documents) { _this.documents = documents; });
    };
    DocumentComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DocumentComponent = __decorate([
        core_1.Component({
            selector: 'document',
            templateUrl: 'app/documents/document-list.html'
        }), 
        __metadata('design:paramtypes', [document_service_1.DocumentService])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=document.component.js.map