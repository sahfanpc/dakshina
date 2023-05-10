import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectdetailComponent } from './prodectdetail.component';

describe('ProdectdetailComponent', () => {
  let component: ProdectdetailComponent;
  let fixture: ComponentFixture<ProdectdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdectdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
