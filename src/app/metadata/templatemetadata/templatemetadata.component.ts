import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { MetadataService } from '../metadata.service';
import { MetadataTemplate } from '../metadatatemplate';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { MessageService } from '../../message.service';
@Component({
  selector: 'app-templatemetadata',
  templateUrl: './templatemetadata.component.html',
  styleUrls: ['./templatemetadata.component.css']
})
export class TemplatemetadataComponent implements OnChanges {
  // 分类
  @Input() classifier: string;
  templateDescription = '';
  data: MetadataTemplate[];
  selectableSetting: SelectableSettings = { mode: 'single', checkboxOnly: false };
  constructor(private metadataService: MetadataService, private messageService: MessageService) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        const changedProp = changes[key];
        const to = changedProp.currentValue;
        if (to) {
          this.metadataService.getMetadataTemplates(to).subscribe(templates => {
            this.data = templates;
          });
        }
      }
    }
  }

  onSelectionChange(event) {
    if (event.selectedRows.length > 0) {
      this.messageService.add(event.selectedRows[0].dataItem.name);
      this.templateDescription = event.selectedRows[0].dataItem.description;
    }
  }
}
