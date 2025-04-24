import { Model } from "mongoose";
import { Candidate } from "src/models/candidates.model";
export declare class CandidatesService {
    private readonly candidatesModel;
    constructor(candidatesModel: Model<Candidate>);
    create(candidate: Candidate): Promise<string>;
    getAllCandidates(): Promise<Candidate[]>;
    searchByBalotNum(balota_number: number): Promise<Candidate>;
    searchByName(name: string): Promise<Candidate>;
    getCandidatesByPosition(position: string): Promise<Candidate>;
}
