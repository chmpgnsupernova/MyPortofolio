import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCaseStudy, getNextCaseStudy } from "../content/caseStudies";
import { CaseStudyLayout } from "../components/casestudy/CaseStudyLayout";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  // Router tidak mereset posisi scroll; halaman baru harus dimulai
  // dari atas.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Judul tab mengikuti isi halaman — penting saat tautan case study
  // dikirim langsung ke seseorang.
  useEffect(() => {
    if (!study) return;
    document.title = `${study.title} — Brian Mariarvin`;
    return () => {
      document.title = "Brian Mariarvin — UI/UX Designer";
    };
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  return <CaseStudyLayout study={study} next={getNextCaseStudy(slug)} />;
}
