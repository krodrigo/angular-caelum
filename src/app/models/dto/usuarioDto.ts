export class UsuarioDto {
    name: string = '';
    username: string = '';
    password: string = '';
    phone: string = '';
    avatar: string = '';

    constructor({nome, username, senha, telefone, avatar }) {
        this.name = nome;
        this.username = username;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;
    }
}