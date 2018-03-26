import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmetadataComponent } from './newmetadata.component';

describe('NewmetadataComponent', () => {
  let component: NewmetadataComponent;
  let fixture: ComponentFixture<NewmetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
