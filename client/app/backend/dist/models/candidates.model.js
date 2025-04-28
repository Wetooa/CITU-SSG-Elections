"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateSchema = void 0;
const mongoose = require("mongoose");
exports.CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        enum: [
            "President",
            "Vice President",
            "Secretary General",
            "Treasurer General",
            "Auditor",
            "BSME Representative",
            "BSIT Representative",
            "BSEM Representative",
            "BSEE Representative",
            "BSIE Representative",
            "BSCE Representative",
            "BSARCH Representative",
            "BSCS Representative",
            "CNAHS Representative",
            "CMBA Representative",
            "CCJ Representative",
            "CASE Representative",
        ],
        required: true,
    },
    party_list: {
        type: String,
        enum: ["United", "Just"],
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
    balota_number: {
        type: Number,
        unique: true,
        required: true,
    },
    social_media: {
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        tiktok: { type: String, default: "" },
    },
    stances: {
        tuition_increase: { type: Boolean, default: false },
        facility_expansion: { type: Boolean, default: false },
        parking_space: { type: Boolean, default: false },
        SSG_fee: { type: Boolean, default: false },
        mental_health: { type: Boolean, default: false },
        cats_in_campus: { type: Boolean, default: false },
        AI_use: { type: Boolean, default: false },
        campus_press_freedom: { type: Boolean, default: false },
        student_activism: { type: Boolean, default: false },
        duterte_arrest: { type: Boolean, default: false },
        political_dynasties: { type: Boolean, default: false },
        sara_impeachment: { type: Boolean, default: false },
        legal_divorse: { type: Boolean, default: false },
        legal_abortion: { type: Boolean, default: false },
        equality_bill: { type: Boolean, default: false },
        same_sex_marriage: { type: Boolean, default: false },
        pro_palestine: { type: Boolean, default: false },
        press_freedom: { type: Boolean, default: false },
    },
});
//# sourceMappingURL=candidates.model.js.map