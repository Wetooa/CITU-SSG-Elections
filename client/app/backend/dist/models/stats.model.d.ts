import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";
export declare const StatsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    vote_count: number;
    views: number;
    featured_count: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    vote_count: number;
    views: number;
    featured_count: number;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    vote_count: number;
    views: number;
    featured_count: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface Stats {
    candidate_id: number | Candidate;
    vote_count: number;
    views: number;
    featured_count: number;
    createdAt?: Date;
    updatedAt?: Date;
}
