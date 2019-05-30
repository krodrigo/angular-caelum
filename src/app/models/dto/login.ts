export class Login {
    email: string = '';
    password: string = '';

    constructor({email, senha}: {email: string, senha: string}) {
        this.email = email;
        this.password = senha;
    }
}