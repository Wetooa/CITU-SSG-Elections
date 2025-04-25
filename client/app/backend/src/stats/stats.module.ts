import { Module } from "@nestjs/common";
import { StatsController } from "./stats.controller";
import { StatsService } from "./stats.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StatsSchema } from "src/models/stats.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Home", schema: StatsSchema }])],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
