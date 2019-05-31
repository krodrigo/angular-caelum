import { EmailPost } from './email-post';

export class EmailGet {
    codigo: string = '';
    destinatario: string = '';
    assunto: string = '';
    mensagem: string = '';
    data: string = '';

    constructor(email: EmailPost) {
        this.codigo = email.id;
        this.destinatario = email.to;
        this.assunto = email.subject;
        this.mensagem = email.content;
        this.data = email.created_at;
    }
}