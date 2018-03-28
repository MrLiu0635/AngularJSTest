import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../metadata.service';
import { MetadataTemplate } from '../metadatatemplate';
import { SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-templatemetadata',
  templateUrl: './templatemetadata.component.html',
  styleUrls: ['./templatemetadata.component.css']
})
export class TemplatemetadataComponent implements OnInit {
  data: MetadataTemplate[];
  selectableSetting: SelectableSettings = { mode: 'single', checkboxOnly: false };
  constructor(private metadataService: MetadataService) { }

  ngOnInit() {
    this.metadataService.getMetadataTemplates().subscribe(templates => this.data = templates);
  }

}
