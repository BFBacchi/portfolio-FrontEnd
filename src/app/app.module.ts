import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import {AcercaDeComponent} from './componentes/acerca-de/acerca-de.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalSkillsComponent } from './componentes/skills/modal-skills/modal-skills.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills/edit-skills.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos/edit-proyectos.component';
import { ModalProyectosComponent } from './componentes/proyectos/modal-proyectos/modal-proyectos.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { ModalComponent } from './componentes/experiencia/modal-experiencia/modal-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { ModalEducacionComponent } from './componentes/educacion/modal-educacion/modal-educacion.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { MatDialogModule } from '@angular/material/dialog';
import { interceptorProvider } from './service/interceptor.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    ModalSkillsComponent,
    EditSkillsComponent,
    EditProyectosComponent,
    ModalProyectosComponent,
    EditExperienciaComponent,
    ModalComponent,
    EditEducacionComponent,
    ModalEducacionComponent,
    EditAcercaDeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
