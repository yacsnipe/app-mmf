import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AgendaViewComponent} from './agenda-view.component';

describe('AgendaComponent', () => {
  let component: AgendaViewComponent;
  let fixture: ComponentFixture<AgendaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgendaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
