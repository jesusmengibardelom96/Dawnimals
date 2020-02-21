import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMalPage } from './edit-mal.page';

describe('EditMalPage', () => {
  let component: EditMalPage;
  let fixture: ComponentFixture<EditMalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
