import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero; // 冒号指定公共属性类型
  // heroes = HEROES; // ts能够通过HEROES属性推断出heroes的属性
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  // onClickHero(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

}
