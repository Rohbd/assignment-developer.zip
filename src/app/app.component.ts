import { Component } from '@angular/core';
import {getArrayOfLength, randomNumber} from "./utils/helper.utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  invoiceId = randomNumber(4);
  arrayGenerator = getArrayOfLength;
  productsCount = 1;

  printInvoice() {
    window.print();
  }
}
