import "../App.css";
import {
  Navbar,
  HeroSection,
  TotalClients,
  FindCar,
  SearchByRegion,
  SearchByBrand,
  JoinUS,
  Testimonials,
  OurTeam,
  ContactUs,
  ContactInfo,
  Blogs,
  Footer
} from "../Components";
const Main = () => {
  return (
    <div>
      <div className="bg-[#1C1C28] hero-bg">
        <Navbar />
        <HeroSection />
      </div>
      <TotalClients />
      <FindCar />
      <SearchByRegion />
      <SearchByBrand />
      <JoinUS />
      <Testimonials />
      <OurTeam />
      <ContactUs />
      <ContactInfo />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Main;
