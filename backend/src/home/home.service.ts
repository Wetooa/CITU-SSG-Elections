import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Home } from "src/models/home.model";

@Injectable()
export class HomeService {
  constructor(@InjectModel("Home") private readonly HomeModel: Model<Home>) {}

  async setFeaturedCandidate(featuredCandidate: Home) {
    const newFeaturedCandidate = new this.HomeModel(featuredCandidate);
    const result = await newFeaturedCandidate.save();
    return result.id as string;
  }

  async getHome() {
    const result = await this.HomeModel.find()
      .populate("featured_candidate")
      .exec();
    return result as Home[];
  }

  async updateFeaturedCandidate(featured_candidate: Home) {
    const result = await this.HomeModel.findOneAndReplace(
      {},
      featured_candidate,
      { new: true }
    );
    return result as Home;
  }
}
