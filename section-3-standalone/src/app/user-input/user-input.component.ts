import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../models/data.model';
import { CaluclService } from '../calcul.service';

@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
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
