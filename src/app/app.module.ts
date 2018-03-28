import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetaillsComponent } from './hero-detaills/hero-detaills.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NewMetadataComponent } from './newmetadata/newmetadata.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MetadataModule } from './metadata/metadata.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetaillsComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NewMetadataComponent
  ],
  imports: [
    MetadataModule,
    BrowserModule,
    FormsModule, // 为了使用ngModel
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ModalModule.forRoot()
  ],
  providers: [HeroService, MessageService, InMemoryDataService], // 服务提供者
  bootstrap: [AppComponent]
})
export class AppModule { }
