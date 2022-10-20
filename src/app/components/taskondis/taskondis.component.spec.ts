import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskondisComponent } from './taskondis.component';

describe('TaskondisComponent', () => {
  let component: TaskondisComponent;
  let fixture: ComponentFixture<TaskondisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskondisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskondisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
