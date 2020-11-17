import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCadastroPage } from './editar-cadastro.page';

describe('EditarCadastroPage', () => {
  let component: EditarCadastroPage;
  let fixture: ComponentFixture<EditarCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
