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
        education: { type: Boolean, default: false },
        environment: { type: Boolean, default: false },
        student_rights: { type: Boolean, default: false },
    },
});
//# sourceMappingURL=candidates.model.js.map