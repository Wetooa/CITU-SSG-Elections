import { Module } from "@nestjs/common";
import { VotingStatsController } from "./voting-stats.controller";
import { VotingStatsService } from "./voting-stats.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StatsSchema } from "src/models/stats.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Stats", schema: StatsSchema }]),
  ],
  controllers: [VotingStatsController],
  providers: [VotingStatsService],
})
export class VotingStatsModule {}
