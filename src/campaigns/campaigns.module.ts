import { Module } from '@nestjs/common';
import { CampaignService } from './campaigns.service';
import { CampaignController } from './campaigns.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './entities/campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign]), AuthModule],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignsModule { }
