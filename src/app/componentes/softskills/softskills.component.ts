import { Component } from '@angular/core';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent {
 
 
    view: [number, number] = [900, 400];
   
   
   single2 = [
     {
       "name": "Comunicacion",
       "value": 80
     },
     {
       "name": "Liderazgo",
       "value": 85
     },
     {
       "name": "Responsalilidad",
       "value": 99
     },
     {
       "name": "Creatividad",
       "value": 95
     },
     {
       "name": "Resolucion de problemas",
       "value": 89
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
    //this.skillsService.skillsData;
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

