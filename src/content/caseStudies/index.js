import { pln } from "./pln";
import { rehub } from "./rehub";

// Urutan di sini adalah urutan tampil di homepage.
// PLN tampil lewat Experience, ReHub lewat Achievements.
export const caseStudies = [pln, rehub];

export const getCaseStudy = (slug) =>
  caseStudies.find((study) => study.slug === slug);

export const getNextCaseStudy = (slug) => {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return null;
  return caseStudies[(index + 1) % caseStudies.length];
};
