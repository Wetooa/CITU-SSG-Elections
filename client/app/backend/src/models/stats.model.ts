import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";

export const StatsSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export interface Stats {
  candidate_id: number | Candidate;
  vote_count: number;
  views: number;
  featured_count: number;
  createdAt?: Date;
  updatedAt?: Date;
}
