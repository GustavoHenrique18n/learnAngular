import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNg2Component } from './teste-ng2.component';

describe('TesteNg2Component', () => {
  let component: TesteNg2Component;
  let fixture: ComponentFixture<TesteNg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
