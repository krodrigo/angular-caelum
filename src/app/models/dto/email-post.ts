import { Email } from '../email';

export class EmailPost {
    to: string = '';
    subject: string = '';
    content: string = '';
    created_at: string = '';
    id: string = '';

    constructor(email: Email) {
        this.to = email.destinatario;
        this.subject = email.assunto;
        this.content = email.mensagem;
        this.created_at = email.data;
        this.id = email.codigo;
    }
}