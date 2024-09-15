import { forwardRef, Module } from '@nestjs/common';
import { ListController } from './lists.controller';
import { ListService } from './lists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([List]),
  forwardRef(() => AuthModule)],
  controllers: [ListController],
  providers: [ListService],
})
export class ListsModule { }
