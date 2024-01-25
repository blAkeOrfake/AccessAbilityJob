import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipFiltersComponent } from './chip-filters.component';

describe('ChipFiltersComponent', () => {
  let component: ChipFiltersComponent;
  let fixture: ComponentFixture<ChipFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
