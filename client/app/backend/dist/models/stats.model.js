"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsSchema = void 0;
const mongoose = require("mongoose");
exports.StatsSchema = new mongoose.Schema({
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
        unique: true,
    },
    vote_count: {
        type: Number,
        default: 0,
        min: 0,
    },
    views: {
        type: Number,
        default: 0,
        min: 0,
    },
    featured_count: {
        type: Number,
        default: 0,
        min: 0,
    },
}, { timestamps: true });
//# sourceMappingURL=stats.model.js.map