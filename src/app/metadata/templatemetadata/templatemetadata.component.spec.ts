import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemetadataComponent } from './templatemetadata.component';

describe('TemplatemetadataComponent', () => {
  let component: TemplatemetadataComponent;
  let fixture: ComponentFixture<TemplatemetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatemetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatemetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
