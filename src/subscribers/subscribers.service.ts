import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { Subscriber } from './entities/subscriber.entity';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) { }

  create(createSubscriberDto: CreateSubscriberDto) {
    const subscriber = this.subscriberRepository.create(createSubscriberDto);
    return this.subscriberRepository.save(subscriber);
  }

  findAll(page: number, limit: number) {
    return this.subscriberRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  update(id: string, updateSubscriberDto: UpdateSubscriberDto) {
    return this.subscriberRepository.update(id, updateSubscriberDto);
  }
}