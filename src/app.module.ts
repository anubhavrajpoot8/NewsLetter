import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { ListsModule } from './lists/lists.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { ClickStatsModule } from './click_stats/click_stats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'anubhav@6263626091',
      database: 'NewsLetter',
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrganizationsModule,
    UsersModule,
    SubscribersModule,
    ListsModule,
    CampaignsModule,
    ClickStatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
