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
        default: "How do you perceive the administration’s plan on increasing the tuition fee for the next academic year?",
        required: true,
    },
    q2: {
        type: String,
        default: "How would you assess the university administration’s performance in terms of responding to student concerns and implementing pro-student policies?",
        required: true,
    },
    q3: {
        type: String,
        default: "What issues do you believe did the 40th SSG administration fail to address? How would you address it?",
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