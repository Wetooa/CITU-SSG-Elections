import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CourseQuestion } from "src/models/courseQuestion.model";

@Injectable()
export class CourseQuestionService {
  constructor(
    @InjectModel("CourseQuestion")
    private readonly cQuestion: Model<CourseQuestion>
  ) {}

  async create(qnaDto: CourseQuestion) {
    const cQuestion = new this.cQuestion(qnaDto);
    const result = await cQuestion.save();
    return result.id as string;
  }

  async findByCandidateId(candidate_id: string): Promise<CourseQuestion> {
    // const result = await this.cQuestion.findById(candidate_id).exec();
    const result = await this.cQuestion.findOne({ candidate_id }).exec();
    if (!result) {
      throw new NotFoundException(
        `QNA not found for candidate ${candidate_id}`
      );
    }
    return result as CourseQuestion;
  }

  async findAll() {
    const result = await this.cQuestion.find().exec();
    return result as CourseQuestion[];
  }
}
