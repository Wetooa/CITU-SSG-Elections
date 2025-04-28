import { Model } from "mongoose";
import { Stats } from "src/models/stats.model";
export declare class VotingStatsService {
    private readonly statsModel;
    constructor(statsModel: Model<Stats>);
    createStat(newStat: Stats): Promise<string>;
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
