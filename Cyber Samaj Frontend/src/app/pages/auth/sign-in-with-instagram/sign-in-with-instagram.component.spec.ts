import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithInstagramComponent } from './sign-in-with-instagram.component';

describe('SignInWithInstagramComponent', () => {
  let component: SignInWithInstagramComponent;
  let fixture: ComponentFixture<SignInWithInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithInstagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInWithInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
