import { Injectable } from "@nestjs/common";
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
  // async findAll() {
  //   const { data, error } = await this.supabaseService.client
  //     .from("Candidates")
  //     .select("*");

  //   if (error) {
  //     throw new Error(`Error fetching candidates: ${error.message}`);
  //   }

  //   return data;
  // }
  // searchByBalotNum(balota_number: number) {
  //   return this.candidates.find(
  //     (candidate) => candidate.balota_number === balota_number
  //   );
  // }
  // searchByName(name: string) {
  //   return this.candidates.filter((candidate) =>
  //     candidate.name.toLowerCase().includes(name.toLowerCase())
  //   );
  // }
  // getCandidatesByPosition(position: string) {
  //   return this.candidates.filter(
  //     (candidate) => candidate.position.toLowerCase() === position.toLowerCase()
  //   );
  // }
}
