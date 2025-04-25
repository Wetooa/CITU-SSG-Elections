"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseQuestionSchema = void 0;
const mongoose = require("mongoose");
exports.courseQuestionSchema = new mongoose.Schema({
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
        unique: true,
    },
    q1: {
        type: String,
        required: true,
    },
    q2: {
        type: String,
        required: true,
    },
    q3: {
        type: String,
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
//# sourceMappingURL=courseQuestion.model.js.map