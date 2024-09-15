import { Module } from '@nestjs/common';
import { SubscriberController } from './subscribers.controller';
import { SubscriberService } from './subscribers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber]), AuthModule],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscribersModule { }
