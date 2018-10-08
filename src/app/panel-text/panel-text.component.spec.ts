import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTextComponent } from './panel-text.component';

describe('PanelTextComponent', () => {
  let component: PanelTextComponent;
  let fixture: ComponentFixture<PanelTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
