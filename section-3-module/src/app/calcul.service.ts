import { Injectable, signal } from "@angular/core";
import { Data } from "./models/data.model";
import { Statistic } from "./models/statistic.model";

@Injectable({ providedIn: 'root' })
export class CaluclService {

    result = signal<Statistic[] | undefined>(undefined)

    calculateInvestmentResults(data: Data) : void {
        const annualData = [];
        let investmentValue = data.initialInvestment;
    
        for (let i = 0; i < data.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (data.expectedReturnu / 100);
        investmentValue += interestEarnedInYear + data.annualInvestment;
        const totalInterest =
            investmentValue - data.annualInvestment * year - data.initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: data.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
            });
        }
        this.result.set(annualData);
    }
}
