import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesusuarioComponent } from './detalhesusuario.component';

describe('DetalhesusuarioComponent', () => {
  let component: DetalhesusuarioComponent;
  let fixture: ComponentFixture<DetalhesusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
