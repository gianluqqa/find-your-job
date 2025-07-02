import CompaniesPreviewView from "./companiespreview/page";
import AboutUsView from "src/views/AboutUsView";
import JobsPreviewView from "src/views/JobsPreviewView";
import ProfessionalDPreview from "src/views/ProfessionalDPreviewView";

export default function Home() {
  return (
      <>
      <JobsPreviewView />
      <CompaniesPreviewView />
      <AboutUsView />
      <ProfessionalDPreview />
    </>
  );
}
