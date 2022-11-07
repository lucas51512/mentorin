import { Pessoa } from "@prisma/client";
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUsuarioDto {
    nomeUsuario: string
    dataNascimento: Date | string
    numeroCelular: string
    emailUsuario: string
    hash: string
    pessoaId: number
}