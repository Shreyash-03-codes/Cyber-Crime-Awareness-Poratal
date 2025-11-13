import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsComponent } from './laws.component';

describe('LawsComponent', () => {
  let component: LawsComponent;
  let fixture: ComponentFixture<LawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
