import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>,
  ) { }

  async createCampaign(createCampaignDto: any): Promise<Campaign[]> {
    const campaign = this.campaignRepository.create(createCampaignDto);
    return this.campaignRepository.save(campaign);
  }

  async listCampaigns(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  async sendCampaign(id: string): Promise<any> {
    return { message: `Campaign ${id} sent successfully` };
  }
}