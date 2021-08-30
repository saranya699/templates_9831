import { Component, OnInit } from '@angular/core';
import { SavedtemplateService } from './savedtemplate.service';

@Component({
  selector: 'app-savedtemplate',
  templateUrl: './savedtemplate.component.html',
  styleUrls: ['./savedtemplate.component.scss'],
})

export class SavedtemplateComponent implements OnInit {

    constructor (
        private savedtemplateService: SavedtemplateService,
    ) { }

    ngOnInit() {
    }
}