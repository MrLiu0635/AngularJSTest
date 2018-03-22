import { Component, NgModule } from '@angular/core';
import { Hero } from './hero';

// 模板字面量,使用`
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
