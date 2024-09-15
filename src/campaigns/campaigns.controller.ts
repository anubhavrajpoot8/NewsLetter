import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { CampaignService } from './campaigns.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('campaigns')
@UseGuards(JwtAuthGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) { }

  @Post()
  async createCampaign(@Body() createCampaignDto: any) {
    return this.campaignService.createCampaign(createCampaignDto);
  }

  @Get()
  async listCampaigns() {
    return this.campaignService.listCampaigns();
  }

  @Post(':id/send')
  async sendCampaign(@Param('id') id: string) {
    return this.campaignService.sendCampaign(id);
  }
}