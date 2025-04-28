import { Module } from "@nestjs/common";
import { CandidatesController } from "./candidates.controller";
import { CandidatesService } from "./candidates.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CandidateSchema } from "../models/candidates.model";
import { QNAModel } from "../models/qna.model";
import { courseQuestionSchema } from "../models/courseQuestion.model";
import { QNAService } from "./qna.service";
import { CourseQuestionService } from "./courseQuestion.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Candidate", schema: CandidateSchema }]),
    MongooseModule.forFeature([{ name: "QNA", schema: QNAModel }]),
    MongooseModule.forFeature([
      { name: "CourseQuestion", schema: courseQuestionSchema },
    ]),
  ],
  controllers: [CandidatesController],
  providers: [CandidatesService, QNAService, CourseQuestionService],
})
export class CandidatesModule {}
