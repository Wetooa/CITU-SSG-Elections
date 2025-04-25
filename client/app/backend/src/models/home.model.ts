import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";

export const HomeSchema = new mongoose.Schema(
  {
    featured_candidate_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: false, // Optional: maybe no spotlight yet
    },
    countdown_target: {
      type: Date,
      required: true,
    },
    latest_news_urls: {
      type: [String], // Array of embedded news or TTSP URLs
      default: [],
    },
    milestones: {
      type: mongoose.Schema.Types.Mixed, // Flexible JSON-style key-value
      default: {},
    },
  },
  { timestamps: true }
);

export interface Home {
  featured_candidate_id?: mongoose.Types.ObjectId | Candidate;
  countdown_target: Date;
  latest_news_urls: string[];
  milestones: any;
}
