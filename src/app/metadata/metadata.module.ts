import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatemetadataComponent } from './createmetadate/createmetadata.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TreeclassifierComponent } from './treeclassifier/treeclassifier.component';
import { TemplatemetadataComponent } from './templatemetadata/templatemetadata.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TreeModule, TreeTableModule, TreeNode, SharedModule } from 'primeng/primeng';
import { GridModule } from '@progress/kendo-angular-grid';
import { MetadataService } from './metadata.service';
import { InMemoryDataService } from '../in-memory-data.service';
import { MessageService } from '../message.service';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    TreeViewModule,
    TreeModule,
    TreeTableModule,
    GridModule,
    InputTextModule
  ],
  exports: [
    CreatemetadataComponent
  ],
  providers: [MetadataService, InMemoryDataService, MessageService], // 服务提供者
  declarations: [CreatemetadataComponent, TreeclassifierComponent, TemplatemetadataComponent]
})
export class MetadataModule { }
