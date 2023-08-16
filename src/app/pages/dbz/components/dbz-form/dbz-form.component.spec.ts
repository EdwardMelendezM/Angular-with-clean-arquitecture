import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzFormComponent } from './dbz-form.component';

describe('DbzFormComponent', () => {
  let component: DbzFormComponent;
  let fixture: ComponentFixture<DbzFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzFormComponent]
    });
    fixture = TestBed.createComponent(DbzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
