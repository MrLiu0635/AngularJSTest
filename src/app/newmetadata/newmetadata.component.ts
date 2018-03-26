import { Component, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-new-metadata',
  templateUrl: './newmetadata.component.html',
  styleUrls: ['./newmetadata.component.css']
})
export class NewMetadataComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
  }
  showSecond(template: TemplateRef<any>) { // 传入的是一个组件
    this.modalRef = this.modalService.show(template); // 在这里通过BsModalService里面的show方法把它显示出来
  }
}
