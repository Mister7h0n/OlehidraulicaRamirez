import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JfileComponent } from './jfile.component';

describe('JfileComponent', () => {
  let component: JfileComponent;
  let fixture: ComponentFixture<JfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
