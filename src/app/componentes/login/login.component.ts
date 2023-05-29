import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  mostrarBotonSubmit: boolean = true;
  mostrarBotonWaiting: boolean = false;
  logginUsser!: LoginUsuario;
  usserName!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.logginUsser = new LoginUsuario(this.usserName, this.password);
    this.authService.loginUser(this.logginUsser).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = data.authorities;
      this.tokenService.saveToken(data.token);
      this.tokenService.saveUser(this.usserName);
      this.tokenService.saveAuthorities(data.authorities);
      this.mostrarBotonSubmit = false;
      this.mostrarBotonWaiting = true;
      this.router.navigate(['/']);
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMessage = err.error.message;
    }
    );
    setTimeout(() => {
      // Luego de completar la operación, muestra nuevamente el botón submit
      this.mostrarBotonSubmit = true;
      this.mostrarBotonWaiting = false;
    }, 2000);
  }
}
