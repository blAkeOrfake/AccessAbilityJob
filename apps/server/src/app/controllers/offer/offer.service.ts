import { Injectable } from '@nestjs/common';

@Injectable()
export class OfferService {
  // This method would typically retrieve data from a database
  getOffers() {
    // Mocked list of orders for example purposes
    return [
      { id: 1, item: 'Item 1', quantity: 1, price: 100 },
      { id: 2, item: 'Item 2', quantity: 2, price: 200 },
      // ... other orders ...
    ];
  }

  /**
   * Final details
Keep in mind the following:

You can use only classes not interfacees
You need to append a .dto.ts or .entity.ts unless you change that
Thanks for reading!
   * 
   * 
   * */
}