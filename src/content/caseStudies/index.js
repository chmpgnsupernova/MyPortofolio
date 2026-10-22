import { pln } from "./pln";
import { rehub } from "./rehub";
import { pocketFriend } from "./pocketFriend";
import { supplyHub } from "./supplyHub";
import { holinery } from "./holinery";

// Urutan di sini adalah urutan tampil di homepage.
// PLN tampil lewat Experience; case study desain lewat section Design.
export const caseStudies = [pln, rehub, pocketFriend, supplyHub, holinery];

export const getCaseStudy = (slug) =>
  caseStudies.find((study) => study.slug === slug);

export const getNextCaseStudy = (slug) => {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return null;
  return caseStudies[(index + 1) % caseStudies.length];
};
