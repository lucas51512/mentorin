import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    nomeUsuario?:string
    
    @IsEmail()
    @IsNotEmpty()
    emailUsuario: string;
    
    @IsString()
    @IsNotEmpty()
    senha: string;
}