import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzComponent } from './dbz.component';

describe('DbzComponent', () => {
  let component: DbzComponent;
  let fixture: ComponentFixture<DbzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzComponent]
    });
    fixture = TestBed.createComponent(DbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
