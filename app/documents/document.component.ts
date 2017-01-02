import {Component, OnInit} from '@angular/core';

import {DocumentService} from './document.service';
import {Document} from './document';


@Component({
	selector: 'document',
	templateUrl: 'app/documents/document-list.html'
})
export class DocumentComponent implements OnInit{

	documents:Document[];

	constructor(private documentService: DocumentService){}

	getData(): void{
		this.documentService.getDocuments().then((documents) => {this.documents = documents});
	}
	

	ngOnInit(): void{
		this.getData();
	}
}