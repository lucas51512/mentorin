import { Pessoa } from "@prisma/client";
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUsuarioDto {
    idUsuario: number
    nomeUsuario: string
    emailUsuario: string
    hash: string
    pessoaId: number
}