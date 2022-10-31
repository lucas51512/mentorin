export class CreateSmtpDto {
    to: string;
    from: string;
    subject: string;
    text: string;
    html?: string;
}
