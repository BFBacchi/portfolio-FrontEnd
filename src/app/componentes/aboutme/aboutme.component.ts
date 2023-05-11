

import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
// importamos las librerias de formulario que vamos a necesitar


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})


export class AboutmeComponent implements OnInit {
 
persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) {
   //this.skillsService.skillsData;
  }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona=data})

  }

}

