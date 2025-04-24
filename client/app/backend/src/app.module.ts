import { Module } from "@nestjs/common";
import { CandidatesModule } from "./candidates/candidates.module";
import { ConfigModule } from "@nestjs/config";
import { HomeModule } from "./home/home.module";
import { StatsModule } from "./stats/stats.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URL_MONGO || ""),

    CandidatesModule,
    HomeModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
