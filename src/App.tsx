import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ITServices from "./components/services/ItServices";
import CloudSolutions from "./components/services/CloudSolutions";
import CyberSecurity from "./components/services/CyberSecurity";
import DataManagement from "./components/services/DataManagement";
import NetworkInfrastructure from "./components/services/NetworkInfrastructure";
import ServerManagement from "./components/services/ServerManagement";
import SoftwareDevelopment from "./components/services/SoftwareDevelopment";
import WebDevelopment from "./components/services/WebDevelopment";
import EmailCollaboration from "./components/services/EmailCollaboration";
import BackupRecovery from "./components/services/BackupRecovery";
import WirelessSolutions from "./components/services/WirelessSolutions";
import AccessControl from "./components/services/AccessControl";
import PrintingDesigningDetail from "./components/services/PrintingDesigning";
import Industries from "./pages/Industries";
import HospitalityIndustry from "./components/industries/Hospitality";
import Healthcare from "./components/industries/Healthcare";
import FinanceBanking from "./components/industries/FinanceBanking";
import RetailEcommerce from "./components/industries/RetailEcommerce";
import Manufacturing from "./components/industries/Manufacturing";
import RealEstate from "./components/industries/RealEstate";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/it-services" element={<ITServices />} />
          <Route path="/services/cloud-services" element={<CloudSolutions />} />
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/network-infrastructure" element={<NetworkInfrastructure />} />
          <Route path="/services/server-management" element={<ServerManagement />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/email-collaboration" element={<EmailCollaboration />} />
          <Route path="/services/backup-recovery" element={<BackupRecovery />} />
          <Route path="/services/wireless-network" element={<WirelessSolutions />} />
          <Route path="/services/access-control" element={<AccessControl />} />
          <Route path="/services/printing-designing" element={<PrintingDesigningDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/hospitality" element={<HospitalityIndustry />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/finance-banking" element={<FinanceBanking />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
