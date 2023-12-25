import Header from "../components/header";
import Hero from "./hero";
import SolarControl from "./solarControl";
import ThermalInsulation from "./thermalInsulation";
import Security from "./security";
import ReflectiveLenses from "./reflectiveLenses";
import TechnicalCatalog from "./technicalCatalog";
import Bim from "./bim";
import Certifications from "./certifications";
import Footer from "../components/footer";

const ToolsAndDownload = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="overflow-y-auto h-554">
        <SolarControl bookmarksId="toolsSection1" />
        <ThermalInsulation bookmarksId="toolsSection2" />
        <Security bookmarksId="toolsSection3" />
        <ReflectiveLenses bookmarksId="toolsSection4" />
        <TechnicalCatalog bookmarksId="toolsSection5" />
        <Bim bookmarksId="toolsSection6" />
        <Certifications bookmarksId="toolsSection7" />
      </div>
      <Footer />
    </div>
  );
};

export default ToolsAndDownload;
