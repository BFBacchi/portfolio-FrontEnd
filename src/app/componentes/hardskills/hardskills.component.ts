import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent {
  
 
    view: [number, number] = [window.innerWidth * .5, window.innerHeight * .5];
   
   single = [
     {
       "name": "HTML",
       "value": 25 
     },
     {
       "name": "CSS",
       "value": 50 
     },
     {
       "name": "Javascript",
       "value": 35 
     },
     {
       "name": "Java",
       "value": 5
     },
     {
       "name": "SQL",
       "value": 10
     },
     {
       "name": "Bootstrap",
       "value": 45
     },
     {
       "name": "Angular 15",
       "value": 35
     }
   ];
   
   
   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = false;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   yAxisLabel: string = 'Skills';
   showYAxisLabel: boolean = true;
   xAxisLabel: string = 'Nivel %';
 
   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAABA']
   };
  
 
   constructor() {
    
  }

  
  
 
   
 
   onSelect(data: any): void {
     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
   }
 
   onActivate(data: any): void {
     console.log('Activate', JSON.parse(JSON.stringify(data)));
   }
 
   onDeactivate(data: any): void {
     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
   }
   

   

 }

