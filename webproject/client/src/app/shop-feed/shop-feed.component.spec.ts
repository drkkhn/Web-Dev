import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFeedComponent } from './shop-feed.component';

describe('ShopFeedComponent', () => {
  let component: ShopFeedComponent;
  let fixture: ComponentFixture<ShopFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
