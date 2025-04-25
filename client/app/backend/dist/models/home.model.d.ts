import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";
export declare const HomeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    featured_candidate_id: mongoose.Types.ObjectId;
    countdown_target: NativeDate;
    latest_news_urls: string[];
    milestones: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    featured_candidate_id: mongoose.Types.ObjectId;
    countdown_target: NativeDate;
    latest_news_urls: string[];
    milestones: any;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    featured_candidate_id: mongoose.Types.ObjectId;
    countdown_target: NativeDate;
    latest_news_urls: string[];
    milestones: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface Home {
    featured_candidate_id: mongoose.Types.ObjectId | Candidate;
    countdown_target: Date;
    latest_news_urls: string[];
    milestones: any;
}
