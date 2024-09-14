import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClickStatsService } from './click_stats.service';
import { CreateClickStatDto } from './dto/create-click_stat.dto';
import { UpdateClickStatDto } from './dto/update-click_stat.dto';

@Controller('click-stats')
export class ClickStatsController {
  constructor(private readonly clickStatsService: ClickStatsService) {}

  @Post()
  create(@Body() createClickStatDto: CreateClickStatDto) {
    return this.clickStatsService.create(createClickStatDto);
  }

  @Get()
  findAll() {
    return this.clickStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clickStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClickStatDto: UpdateClickStatDto) {
    return this.clickStatsService.update(+id, updateClickStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clickStatsService.remove(+id);
  }
}
