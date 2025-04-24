import { Model } from "mongoose";
import { Candidate } from "src/models/candidates.model";
export declare class CandidatesService {
    private readonly candidatesModel;
    constructor(candidatesModel: Model<Candidate>);
    create(candidate: Candidate): Promise<string>;
}
