import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointedTopHexagonComponent } from './pointed-top-hexagon.component';

describe('PointedTopHexagonComponent', () => {
  let component: PointedTopHexagonComponent;
  let fixture: ComponentFixture<PointedTopHexagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointedTopHexagonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointedTopHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
