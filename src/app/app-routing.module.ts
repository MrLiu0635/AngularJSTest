import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetaillsComponent } from './hero-detaills/hero-detaills.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  // path 中的冒号（:）表示 :id 是一个占位符
  { path: 'detail/:id', component: HeroDetaillsComponent }
];

@NgModule({
  imports: [
    // CommonModule
    // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
