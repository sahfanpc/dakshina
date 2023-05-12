import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownDropPageComponent } from './down-drop-page.component';

describe('DownDropPageComponent', () => {
  let component: DownDropPageComponent;
  let fixture: ComponentFixture<DownDropPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownDropPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownDropPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
