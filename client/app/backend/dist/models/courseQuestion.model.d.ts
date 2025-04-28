import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";
export declare const courseQuestionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    q1: string;
    q2: string;
    q3: string;
    answer_q1: string;
    answer_q2: string;
    answer_q3: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    q1: string;
    q2: string;
    q3: string;
    answer_q1: string;
    answer_q2: string;
    answer_q3: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    candidate_id: mongoose.Types.ObjectId;
    q1: string;
    q2: string;
    q3: string;
    answer_q1: string;
    answer_q2: string;
    answer_q3: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface CourseQuestion {
    candidate_id: mongoose.Types.ObjectId | Candidate;
    q1: string;
    q2: string;
    q3: string;
    answer_q1: string;
    answer_q2: string;
    answer_q3: string;
    createdAt?: Date;
    updatedAt?: Date;
}
