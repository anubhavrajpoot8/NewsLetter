import { Module } from '@nestjs/common';
import { ClickStatController } from './click_stats.controller';
import { ClickStatService } from './click_stats.service';
import { ClickStat } from './entities/click_stat.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ClickStat]), AuthModule],
  controllers: [ClickStatController],
  providers: [ClickStatService],
})
export class ClickStatsModule { }
