import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  esDia: boolean =true;
esNoche: boolean = false;

cambiaNoche(){
  return this.esNoche = true

}

cambiaDia(){
  return this.esDia = true

}
}
