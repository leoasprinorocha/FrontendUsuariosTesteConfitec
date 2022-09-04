import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionausuarioComponent } from './adicionausuario.component';

describe('AdicionausuarioComponent', () => {
  let component: AdicionausuarioComponent;
  let fixture: ComponentFixture<AdicionausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
