import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeclassifierComponent } from './treeclassifier.component';

describe('TreeclassifierComponent', () => {
  let component: TreeclassifierComponent;
  let fixture: ComponentFixture<TreeclassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeclassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeclassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
