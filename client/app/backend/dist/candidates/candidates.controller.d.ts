import { CandidatesService } from "./candidates.service";
import { Candidate } from "src/models/candidates.model";
export declare class CandidatesController {
    private readonly candidatesService;
    constructor(candidatesService: CandidatesService);
    create(createCandidateDto: Candidate): Promise<string>;
}
