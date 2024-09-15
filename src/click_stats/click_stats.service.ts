import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClickStat } from './entities/click_stat.entity';
import { CreateClickStatDto } from './dto/create-click_stat.dto';

@Injectable()
export class ClickStatService {
  constructor(
    @InjectRepository(ClickStat)
    private clickStatRepository: Repository<ClickStat>,
  ) { }

  create(createClickStatDto: CreateClickStatDto) {
    const clickStat = this.clickStatRepository.create(createClickStatDto);
    return this.clickStatRepository.save(clickStat);
  }

  findAll() {
    return this.clickStatRepository.find();
  }
}