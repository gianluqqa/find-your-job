import CompaniesPreviewView from "./companies-preview/page";
import AboutUsView from "src/views/AboutUsView";
import JobsPreviewView from "src/views/JobsPreviewView";
import ProfessionalDPreview from "src/views/ProfessionalDPreviewView";
import RegisterCandidateView from "src/views/RegisterCandidateView";
import SupportView from "src/views/SupportView";

export default function Home() {
  return (
      <>
      <JobsPreviewView />
      <CompaniesPreviewView />
      <AboutUsView />
      <ProfessionalDPreview />
      <SupportView />
    </>
  );
}
