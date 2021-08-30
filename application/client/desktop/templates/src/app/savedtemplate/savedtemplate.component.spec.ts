import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedtemplateComponent } from './savedtemplate.component';

describe('SavedtemplateComponent', () => {
  let component: SavedtemplateComponent;
  let fixture: ComponentFixture<SavedtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});