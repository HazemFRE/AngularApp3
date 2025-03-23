import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvoucherComponent } from './postvoucher.component';

describe('PostvoucherComponent', () => {
  let component: PostvoucherComponent;
  let fixture: ComponentFixture<PostvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostvoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
