import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Stats } from "src/models/stats.model";

@Injectable()
export class VotingStatsService {
  constructor(
    @InjectModel("Stats") private readonly statsModel: Model<Stats>
  ) {}

  async createStat(newStat: Stats) {
    const newStats = new this.statsModel(newStat);
    const result = await newStats.save();
    return result.id as string;
  }

  async getStats() {
    const result = await this.statsModel.find().populate("Candidate").exec();
    return result as Stats[];
  }

  async updateVotes(candidateId: string) {
    const result = await this.statsModel
      .findOneAndUpdate(
        { candidate_id: candidateId },
        { $inc: { vote_count: 1 } },
        { new: true }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(
        `Stats for candidate ${candidateId} not found`
      );
    }
    return result;
  }
  async updateViews(candidateId: string) {
    const result = await this.statsModel
      .findOneAndUpdate(
        { candidate_id: candidateId },
        { $inc: { views: 1 } },
        { new: true }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(
        `Stats for candidate ${candidateId} not found`
      );
    }
    return result;
  }

  async updateFeatureCount(candidateId: string) {
    const result = await this.statsModel
      .findOneAndUpdate(
        { candidate_id: candidateId },
        { $inc: { featured_count: 1 } },
        { new: true }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(
        `Stats for candidate ${candidateId} not found`
      );
    }
    return result;
  }
}
