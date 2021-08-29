import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsampleComponent } from './ssample.component';

describe('SsampleComponent', () => {
  let component: SsampleComponent;
  let fixture: ComponentFixture<SsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
