import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButton } from './contact-button';

describe('ContactButton', () => {
  let component: ContactButton;
  let fixture: ComponentFixture<ContactButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
