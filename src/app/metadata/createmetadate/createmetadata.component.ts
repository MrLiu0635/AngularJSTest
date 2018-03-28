import { Component, ViewChild, Input, OnChanges, SimpleChange  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-metadata',
  templateUrl: './createmetadata.component.html',
  styleUrls: ['./createmetadata.component.css']
})
export class CreatemetadataComponent {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  // @Input()
  isModalShown = false;
  metadata = {
    code: '',
    name: '',
    location: ''
  };

  constructor() {
  }

  // ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
  //   for (let propName in changes) {
  //     let changedProp = changes[propName];
  //     let to = JSON.stringify(changedProp.currentValue);
  //     if (propName == 'isModalShown')
  //     {
  //       this.isModalShown = to == 'true';
  //     }
  //   }
  // }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
}
