import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../message.service';
import { MetadataService } from '../metadata.service';
@Component({
  selector: 'app-treeclassifier',
  templateUrl: './treeclassifier.component.html',
  styleUrls: ['./treeclassifier.component.css']
})
export class TreeclassifierComponent implements OnInit {
  files: any;
  @Output() selectedChange = new EventEmitter<string>();
  constructor(private metadataService: MetadataService, private messageService: MessageService) { }

  ngOnInit() {
    this.metadataService.getMetadataClassifier().subscribe(data => {
      this.files = data.data;
      if (this.files) {
        this.selectedChange.emit(this.files[0].data);
      }
    });
  }
  nodeSelect(event) {
    this.messageService.add(event.node.label + '-' + event.node.data);
    this.selectedChange.emit(event.node.data);
  }
}
