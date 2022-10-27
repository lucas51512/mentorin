import { Injectable } from '@nestjs/common';
import { CreateCategoriaInternaDto } from './dto/create-categoria-interna.dto';
import { UpdateCategoriaInternaDto } from './dto/update-categoria-interna.dto';

@Injectable()
export class CategoriaInternaService {
  create(createCategoriaInternaDto: CreateCategoriaInternaDto) {
    return 'This action adds a new categoriaInterna';
  }

  findAll() {
    return `This action returns all categoriaInterna`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaInterna`;
  }

  update(id: number, updateCategoriaInternaDto: UpdateCategoriaInternaDto) {
    return `This action updates a #${id} categoriaInterna`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaInterna`;
  }
}
