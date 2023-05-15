export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    constructor({ nombreUsuario, password }: { nombreUsuario: string; password: string; }){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
