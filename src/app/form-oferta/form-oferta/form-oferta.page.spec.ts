import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOfertaPage } from './form-oferta.page';

describe('FormOfertaPage', () => {
  let component: FormOfertaPage;
  let fixture: ComponentFixture<FormOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
