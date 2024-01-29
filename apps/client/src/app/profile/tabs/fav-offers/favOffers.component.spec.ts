import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavOffersComponent } from './favOffers.component';

describe('FavOffersComponent', () => {
  let component: FavOffersComponent;
  let fixture: ComponentFixture<FavOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavOffersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
