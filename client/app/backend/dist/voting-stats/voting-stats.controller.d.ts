import { VotingStatsService } from "./voting-stats.service";
import { Stats } from "src/models/stats.model";
export declare class VotingStatsController {
    private readonly statsService;
    constructor(statsService: VotingStatsService);
    createStat(stats: Stats): Promise<string>;
    getStats(): Promise<Stats[]>;
    updateVotes(candidateId: string): Promise<import("mongoose").Document<unknown, {}, Stats> & Stats & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateViews(candidateId: string): Promise<import("mongoose").Document<unknown, {}, Stats> & Stats & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateFeatureCount(candidateId: string): Promise<import("mongoose").Document<unknown, {}, Stats> & Stats & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
