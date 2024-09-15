import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) { }

  create(createListDto: CreateListDto) {
    const list = this.listRepository.create(createListDto);
    return this.listRepository.save(list);
  }

  findAll() {
    return this.listRepository.find();
  }

  update(id: string, updateListDto: UpdateListDto) {
    return this.listRepository.update(id, updateListDto);
  }
}