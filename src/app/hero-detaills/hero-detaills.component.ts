import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detaills',
  templateUrl: './hero-detaills.component.html',
  styleUrls: ['./hero-detaills.component.css']
})
export class HeroDetaillsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    // JavaScript 的 (+) 操作符会把字符串转换成数字
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
