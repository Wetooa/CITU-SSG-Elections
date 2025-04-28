import { CandidatesService } from "./candidates.service";
import { QNAService } from "./qna.service";
import { CourseQuestionService } from "./courseQuestion.service";
import { Candidate } from "src/models/candidates.model";
import { QNA } from "src/models/qna.model";
import { CourseQuestion } from "src/models/courseQuestion.model";
export declare class CandidatesController {
    private readonly candidatesService;
    private readonly qnaService;
    private readonly courseQuestionService;
    constructor(candidatesService: CandidatesService, qnaService: QNAService, courseQuestionService: CourseQuestionService);
    createQNA(candidateId: string, qnaDto: QNA): Promise<string>;
    getQNA(candidateId: string): Promise<QNA>;
    getAllQNA(): Promise<QNA[]>;
    createCourseQuestions(candidateId: string, courseQuestionDto: CourseQuestion): Promise<string>;
    getCourseQuestions(candidateId: string): Promise<CourseQuestion>;
    getAllCourseQuestions(): Promise<CourseQuestion[]>;
    create(createCandidateDto: Candidate): Promise<string>;
    findAll(): Promise<Candidate[]>;
    search(query: string): Promise<Candidate>;
    update(position: string, candidateId: string): Promise<import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
