import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { VotingStatsService } from "./voting-stats.service";
import { Stats } from "src/models/stats.model";

@Controller("voting-stats")
export class VotingStatsController {
  constructor(private readonly statsService: VotingStatsService) {}

  //to post and populate the database
  @Post()
  async createStat(@Body() stats: Stats) {
    return await this.statsService.createStat(stats);
  }
  //Get all the Stats
  @Get()
  async getStats() {
    const result = await this.statsService.getStats();
    return result;
  }
  //To update the votes
  //localhost:8000/voting-stats/<candidateID>/votes
  @Patch(":candidateId/votes")
  async updateVotes(@Param("candidateId") candidateId: string) {
    return await this.statsService.updateVotes(candidateId);
  }
  //Updating Views
  //localhost:8000/voting-stats/<candidateID>/views
  @Patch(":candidateId/views")
  async updateViews(@Param("candidateId") candidateId: string) {
    return await this.statsService.updateViews(candidateId);
  }

  //Updating the feature count
  //localhost:8000/voting-stats/<candidateID>/featured
  @Patch(":candidateId/featured")
  async updateFeatureCount(@Param("candidateId") candidateId: string) {
    return await this.statsService.updateFeatureCount(candidateId);
  }
}
