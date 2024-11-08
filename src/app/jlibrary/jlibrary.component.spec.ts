import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JLibraryComponent } from './jlibrary.component';

describe('JLibraryComponent', () => {
  let component: JLibraryComponent;
  let fixture: ComponentFixture<JLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
