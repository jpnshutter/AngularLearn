import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbyIdComponent } from './compby-id.component';

describe('CompbyIdComponent', () => {
  let component: CompbyIdComponent;
  let fixture: ComponentFixture<CompbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompbyIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
