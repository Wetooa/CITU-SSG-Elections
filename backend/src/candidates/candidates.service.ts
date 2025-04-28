import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Candidate } from "src/models/candidates.model";

@Injectable()
export class CandidatesService {
  constructor(
    @InjectModel("Candidate") private readonly candidatesModel: Model<Candidate>
  ) {}

  async create(candidate: Candidate) {
    const newCandidate = new this.candidatesModel(candidate);
    const result = await newCandidate.save();
    return result.id as string;
  }

  async getAllCandidates() {
    const result = await this.candidatesModel.find().exec();
    return result as Candidate[];
  }

  async searchByBalotNum(balota_number: number): Promise<Candidate> {
    const result = await this.candidatesModel.findOne({ balota_number }).exec();
    if (!result) {
      throw new NotFoundException("No Candidate with that Balot Number");
    }
    return result as Candidate;
  }
  async searchByName(name: string): Promise<Candidate> {
    const result = await this.candidatesModel
      .findOne({
        name: { $regex: name, $options: "i" },
      })
      .exec();
    if (!result) {
      throw new NotFoundException("No Candidate with that Name");
    }
    return result as Candidate;
  }
  async getCandidatesByPosition(position: string): Promise<Candidate> {
    const result = await this.candidatesModel.findOne({ position }).exec();
    if (!result) {
      throw new NotFoundException("No Position exists");
    }
    return result as Candidate;
  }

  async updateCandidate(position: string, candidateId: string) {
    const result = await this.candidatesModel
      .findByIdAndUpdate(
        candidateId,
        { $set: { position: position } },
        {
          new: true,
          runValidators: true,
        }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(`Candidate ${candidateId} not found`);
    }

    return result;
  }
}
