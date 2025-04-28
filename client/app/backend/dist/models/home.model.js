"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSchema = void 0;
const mongoose = require("mongoose");
exports.HomeSchema = new mongoose.Schema({
    featured_candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
        unique: true,
    },
    countdown_target: {
        type: Date,
        required: true,
    },
    latest_news_urls: {
        type: [String],
        default: [],
    },
    milestones: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
    },
}, { timestamps: true });
//# sourceMappingURL=home.model.js.map