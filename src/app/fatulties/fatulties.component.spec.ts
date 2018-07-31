import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatultiesComponent } from './fatulties.component';

describe('FatultiesComponent', () => {
  let component: FatultiesComponent;
  let fixture: ComponentFixture<FatultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
