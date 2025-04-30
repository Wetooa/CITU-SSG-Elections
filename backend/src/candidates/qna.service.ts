import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { QNA } from "src/models/qna.model";
@Injectable()
export class QNAService {
  constructor(@InjectModel("QNA") private readonly qnaModel: Model<QNA>) {}

  async create(qnaDto: QNA) {
    const newQNA = new this.qnaModel(qnaDto);
    const result = await newQNA.save();
    return result.id as string;
  }

  async findByCandidateId(candidateId: string): Promise<QNA> {
    // const result = await this.qnaModel.findById(candidateId).exec();
    const result = await this.qnaModel.findOne({ candidateId }).exec();
    if (!result) {
      throw new NotFoundException(`QNA not found for candidate ${candidateId}`);
    }
    return result as QNA;
  }
  async findAll() {
    const result = await this.qnaModel.find().exec();
    return result as QNA[];
  }
}
