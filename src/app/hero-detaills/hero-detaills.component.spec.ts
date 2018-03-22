import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetaillsComponent } from './hero-detaills.component';

describe('HeroDetaillsComponent', () => {
  let component: HeroDetaillsComponent;
  let fixture: ComponentFixture<HeroDetaillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetaillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
