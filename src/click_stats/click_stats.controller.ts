import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateClickStatDto } from './dto/create-click_stat.dto';
import { ClickStatService } from './click_stats.service';

@Controller('click-stats')
@UseGuards(JwtAuthGuard)
export class ClickStatController {
  constructor(private readonly clickStatService: ClickStatService) { }

  @Post()
  create(@Body() createClickStatDto: CreateClickStatDto) {
    return this.clickStatService.create(createClickStatDto);
  }

  @Get()
  findAll() {
    return this.clickStatService.findAll();
  }
}