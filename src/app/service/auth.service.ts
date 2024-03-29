import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'https://portfolio-backend-3ekx.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public newUser($newUser: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.ENDPOINT + 'nuevo', $newUser);
  }

  public loginUser($user: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.ENDPOINT + 'login', $user);
  }
}

