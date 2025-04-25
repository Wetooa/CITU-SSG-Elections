import { Module } from '@nestjs/common';
import { DailyVotesController } from './daily-votes.controller';
import { DailyVotesService } from './daily-votes.service';

@Module({
  controllers: [DailyVotesController],
  providers: [DailyVotesService]
})
export class DailyVotesModule {}
