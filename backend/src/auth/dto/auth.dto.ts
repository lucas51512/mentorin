import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    @IsString()
    nomeUsuario:string
    
    @IsEmail()
    @IsNotEmpty()
    emailUsuario: string;
    
    @IsString()
    @IsNotEmpty()
    senha: string;
}