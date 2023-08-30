import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent, ShoppingCartModel } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dev-huddle app is running!');
  });

  it('should return 0 if numOfItems is undefined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.componentInstance;
    app.shoppingCartModel = {
      numOfItems: undefined,
      priceUnit: 20,
      stateCode: '',
      totalPrice: undefined
    } as ShoppingCartModel;
    const total = app.getOriginalTotal();
    expect(total).toEqual(0);
  });

  it('should return 0 if priceUnit is undefined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.componentInstance;
    app.shoppingCartModel = {
      numOfItems: undefined,
      priceUnit: undefined,
      stateCode: '',
      totalPrice: undefined
    } as ShoppingCartModel;
    const total = app.getOriginalTotal();
    expect(total).toEqual(0);
  });

  it('should return original total price', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.componentInstance;
    app.shoppingCartModel = {
      numOfItems: 10,
      priceUnit: 20,
      stateCode: '',
      totalPrice: undefined
    } as ShoppingCartModel;
    const total = app.getOriginalTotal();
    expect(total).toEqual(200);
  })
});
