import { Model } from "mongoose";
import { QNA } from "src/models/qna.model";
export declare class QNAService {
    private readonly qnaModel;
    constructor(qnaModel: Model<QNA>);
    create(qnaDto: QNA): Promise<string>;
    findByCandidateId(candidateId: string): Promise<QNA>;
    findAll(): Promise<QNA[]>;
}
