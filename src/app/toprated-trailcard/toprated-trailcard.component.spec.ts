import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopratedTrailcardComponent } from './toprated-trailcard.component';

describe('TopratedTrailcardComponent', () => {
  let component: TopratedTrailcardComponent;
  let fixture: ComponentFixture<TopratedTrailcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedTrailcardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopratedTrailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
