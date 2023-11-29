import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroVentasComponent } from './filtro-ventas.component';

describe('FiltroVentasComponent', () => {
  let component: FiltroVentasComponent;
  let fixture: ComponentFixture<FiltroVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroVentasComponent]
    });
    fixture = TestBed.createComponent(FiltroVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
