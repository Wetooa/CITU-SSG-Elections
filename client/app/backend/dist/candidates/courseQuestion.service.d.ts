import { Model } from "mongoose";
import { CourseQuestion } from "src/models/courseQuestion.model";
export declare class CourseQuestionService {
    private readonly cQuestion;
    constructor(cQuestion: Model<CourseQuestion>);
    create(qnaDto: CourseQuestion): Promise<string>;
    findByCandidateId(candidate_id: string): Promise<CourseQuestion>;
    findAll(): Promise<CourseQuestion[]>;
}
