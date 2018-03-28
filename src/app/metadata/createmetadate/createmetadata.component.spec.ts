import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemetadataComponent } from './createmetadata.component';

describe('CreatemetadataComponent', () => {
  let component: CreatemetadataComponent;
  let fixture: ComponentFixture<CreatemetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
