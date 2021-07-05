import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNgComponent } from './teste-ng.component';

describe('TesteNgComponent', () => {
  let component: TesteNgComponent;
  let fixture: ComponentFixture<TesteNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
