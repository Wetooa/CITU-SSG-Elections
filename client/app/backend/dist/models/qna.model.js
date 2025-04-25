"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QNAModel = void 0;
const mongoose = require("mongoose");
exports.QNAModel = new mongoose.Schema({
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
        unique: true,
    },
    q1: {
        type: String,
        default: "Tuition and Other Fees Increase (TOFI)",
        required: true,
    },
    q2: {
        type: String,
        default: "University Administration Performance",
        required: true,
    },
    q3: {
        type: String,
        default: "SSG Administration Performance",
        required: true,
    },
    answer_q1: {
        type: String,
        required: true,
    },
    answer_q2: {
        type: String,
        required: true,
    },
    answer_q3: {
        type: String,
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=qna.model.js.map