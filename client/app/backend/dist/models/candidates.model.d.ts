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
        tuition_increase: boolean;
        facility_expansion: boolean;
        parking_space: boolean;
        SSG_fee: boolean;
        mental_health: boolean;
        cats_in_campus: boolean;
        AI_use: boolean;
        campus_press_freedom: boolean;
        student_activism: boolean;
        duterte_arrest: boolean;
        political_dynasties: boolean;
        sara_impeachment: boolean;
        legal_divorse: boolean;
        legal_abortion: boolean;
        equality_bill: boolean;
        same_sex_marriage: boolean;
        pro_palestine: boolean;
        press_freedom: boolean;
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
        tuition_increase: boolean;
        facility_expansion: boolean;
        parking_space: boolean;
        SSG_fee: boolean;
        mental_health: boolean;
        cats_in_campus: boolean;
        AI_use: boolean;
        campus_press_freedom: boolean;
        student_activism: boolean;
        duterte_arrest: boolean;
        political_dynasties: boolean;
        sara_impeachment: boolean;
        legal_divorse: boolean;
        legal_abortion: boolean;
        equality_bill: boolean;
        same_sex_marriage: boolean;
        pro_palestine: boolean;
        press_freedom: boolean;
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
        tuition_increase: boolean;
        facility_expansion: boolean;
        parking_space: boolean;
        SSG_fee: boolean;
        mental_health: boolean;
        cats_in_campus: boolean;
        AI_use: boolean;
        campus_press_freedom: boolean;
        student_activism: boolean;
        duterte_arrest: boolean;
        political_dynasties: boolean;
        sara_impeachment: boolean;
        legal_divorse: boolean;
        legal_abortion: boolean;
        equality_bill: boolean;
        same_sex_marriage: boolean;
        pro_palestine: boolean;
        press_freedom: boolean;
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
        tuition_increase: boolean;
        facility_expansion: boolean;
        parking_space: boolean;
        SSG_fee: boolean;
        mental_health: boolean;
        cats_in_campus: boolean;
        AI_use: boolean;
        campus_press_freedom: boolean;
        student_activism: boolean;
        duterte_arrest: boolean;
        political_dynasties: boolean;
        sara_impeachment: boolean;
        legal_divorse: boolean;
        legal_abortion: boolean;
        equality_bill: boolean;
        same_sex_marriage: boolean;
        pro_palestine: boolean;
        press_freedom: boolean;
    };
}
