import { CANDIDATE_TO_IMAGE } from "@/utils/consts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCandidateImage(name: string) {
  return CANDIDATE_TO_IMAGE[name] || "/candidates/DUTERTE-PLACEHOLDER.png";
}
