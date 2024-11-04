import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import { WhyChooseUs }from "./components/WhyChooseUs";
import { BrowserRouter as Router } from 'react-router-dom';
import MusicSchoolTestimonial from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import LawyerProfile from "./lawyer-profile/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection/>
       <FeaturedSection/>
      <WhyChooseUs/>
      {/* <LawyerProfile/> */}
       {/*<MusicSchoolTestimonial/>
      <UpcomingWebinars/>
      <Instructor/> */}
      {/* <Footer/> */}
    </main>
  );
}
