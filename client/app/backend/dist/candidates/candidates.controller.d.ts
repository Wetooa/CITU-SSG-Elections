import { CandidatesService } from "./candidates.service";
import { Candidate } from "src/models/candidates.model";
export declare class CandidatesController {
    private readonly candidatesService;
    constructor(candidatesService: CandidatesService);
    create(createCandidateDto: Candidate): Promise<string>;
    findAll(): Promise<Candidate[]>;
    search(query: string): Promise<Candidate>;
    update(position: string, candidateId: string): Promise<import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
