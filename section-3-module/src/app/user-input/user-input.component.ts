import { Component } from '@angular/core';
import { CaluclService } from '../calcul.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private calculateService: CaluclService) {}

  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturnu: number = 5;
  duration: number = 10;

  onSubmit() {
    this.calculateService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturnu: this.expectedReturnu,
      duration: this.duration,
    })
  }
}
