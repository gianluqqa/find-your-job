import AdsView from "src/views/AdsView";
import JobsPanelView from "src/views/JobsPanelView";
import CompaniesPreviewView from "./companiespreview/page";
import AboutUsView from "src/views/AboutUsView";
import JobsPreviewView from "src/views/JobsPreviewView";
import ProfessionalDPreview from "src/views/ProfessionalDPreviewView";

export default function Home() {
  return (
    <>
      <AdsView />
      <JobsPanelView />
      <CompaniesPreviewView />
      <AboutUsView />
      <JobsPreviewView />
      <ProfessionalDPreview />
    </>
  );
}
