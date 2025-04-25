import { Module } from "@nestjs/common";
import { CandidatesModule } from "./candidates/candidates.module";
import { ConfigModule } from "@nestjs/config";
import { HomeModule } from "./home/home.module";
import { MongooseModule } from "@nestjs/mongoose";
import { VotingStatsModule } from "./voting-stats/voting-stats.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URL_MONGO || ""),

    CandidatesModule,
    HomeModule,
    VotingStatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
