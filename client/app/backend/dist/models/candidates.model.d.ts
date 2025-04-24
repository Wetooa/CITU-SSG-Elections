import * as mongoose from "mongoose";
export declare const CandidateSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    position: "President" | "Vice President" | "Secretary General" | "Treasurer General" | "Auditor" | "BSME Representative" | "BSIT Representative" | "BSEM Representative" | "BSEE Representative" | "BSIE Representative" | "BSCE Representative" | "BSARCH Representative" | "BSCS Representative" | "CNAHS Representative" | "CMBA Representative" | "CCJ Representative" | "CASE Representative";
    party_list: "United" | "Just";
    votes: number;
    balota_number: number;
    social_media?: {
        facebook: string;
        instagram: string;
        tiktok: string;
    } | null | undefined;
    stances?: {
        education: boolean;
        environment: boolean;
        student_rights: boolean;
    } | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    position: "President" | "Vice President" | "Secretary General" | "Treasurer General" | "Auditor" | "BSME Representative" | "BSIT Representative" | "BSEM Representative" | "BSEE Representative" | "BSIE Representative" | "BSCE Representative" | "BSARCH Representative" | "BSCS Representative" | "CNAHS Representative" | "CMBA Representative" | "CCJ Representative" | "CASE Representative";
    party_list: "United" | "Just";
    votes: number;
    balota_number: number;
    social_media?: {
        facebook: string;
        instagram: string;
        tiktok: string;
    } | null | undefined;
    stances?: {
        education: boolean;
        environment: boolean;
        student_rights: boolean;
    } | null | undefined;
}>> & mongoose.FlatRecord<{
    name: string;
    position: "President" | "Vice President" | "Secretary General" | "Treasurer General" | "Auditor" | "BSME Representative" | "BSIT Representative" | "BSEM Representative" | "BSEE Representative" | "BSIE Representative" | "BSCE Representative" | "BSARCH Representative" | "BSCS Representative" | "CNAHS Representative" | "CMBA Representative" | "CCJ Representative" | "CASE Representative";
    party_list: "United" | "Just";
    votes: number;
    balota_number: number;
    social_media?: {
        facebook: string;
        instagram: string;
        tiktok: string;
    } | null | undefined;
    stances?: {
        education: boolean;
        environment: boolean;
        student_rights: boolean;
    } | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface Candidate {
    name: string;
    position: string;
    party_list: string;
    votes: number;
    balota_number: number;
    social_media: {
        facebook: string;
        instagram: string;
        tiktok: string;
    };
    stances: {
        education: boolean;
        environment: boolean;
        student_rights: boolean;
    };
}
