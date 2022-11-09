import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatTopHexagonComponent } from './flat-top-hexagon.component';

describe('FlatTopHexagonComponent', () => {
  let component: FlatTopHexagonComponent;
  let fixture: ComponentFixture<FlatTopHexagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatTopHexagonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatTopHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
