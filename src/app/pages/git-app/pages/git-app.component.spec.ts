import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAppComponent } from './git-app.component';

describe('GitAppComponent', () => {
  let component: GitAppComponent;
  let fixture: ComponentFixture<GitAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitAppComponent]
    });
    fixture = TestBed.createComponent(GitAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
