import { Component, EventEmitter, output, Output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calaculate =new EventEmitter<InvestmentInput>()
  // calaculate =output<InvestmentInput>()

  enteredInitialInvestment=signal('');
  enteredAnnualInvestment=signal('');
  enteredExpectedReturn=signal('');
  enterdDuration=signal('');

  constructor(private investmentService:InvestmentService){}
 
  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
      duration:+this.enterdDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment(),
    });
    // this.calaculate.emit({
    //   initialInvestment:+this.enteredInitialInvestment(),
    //   duration:+this.enterdDuration(),
    //   expectedReturn:+this.enteredExpectedReturn(),
    //   annualInvestment:+this.enteredAnnualInvestment(),
    // });
  }
}
