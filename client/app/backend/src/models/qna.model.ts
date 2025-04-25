import * as mongoose from "mongoose";
import { Candidate } from "./candidates.model";

export const QNAModel = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export interface QNA {
  candidate_id: mongoose.Types.ObjectId | Candidate;
  q1?: string;
  q2?: string;
  q3?: string;
  answer_q1?: string;
  answer_q2?: string;
  answer_q3?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
