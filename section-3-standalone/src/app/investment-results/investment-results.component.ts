import { Component, Input, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CaluclService } from '../calcul.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private calculateService: CaluclService) {}
  // get statics() {
  //   return this.calculateService.result();
  // }

  // statics = computed(() => this.calculateService.result())
  
  statics = this.calculateService.result.asReadonly()
}
