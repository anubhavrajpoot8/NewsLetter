import { Module } from '@nestjs/common';
import { ClickStatsService } from './click_stats.service';
import { ClickStatsController } from './click_stats.controller';

@Module({
  controllers: [ClickStatsController],
  providers: [ClickStatsService],
})
export class ClickStatsModule {}
