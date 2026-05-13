import AdditionalDetails from "../components/additional_details";
import Ads from "../components/ads";
import CardSlider from "../components/card_slider";
// import Certificate from "../components/certificates";
import Collections from "../components/collections";
import ContactBanner from "../components/contact_banner";
import CtaBanner from "../components/cta_banner";
import Hero from "../components/hero";
// import ImageSlider from "../components/image_slider";
// import OurExpertise from "../components/our_expertise";
// import Sponsor from "../components/sponsor";
// import Testimonials from "../components/testimonials";
import View from "../components/view";
import WhyUs from "../components/why_us";

export default function Home() {
  return (
    <main className="z-20">
      <Hero />
      <View />
      <CardSlider />
      {/* <Sponsor /> */}
      <Collections />
      {/* <ImageSlider /> */}
      <AdditionalDetails />
      <Ads />
      <CtaBanner />
      <WhyUs />
      {/* <OurExpertise /> */}
      {/* <Certificate /> */}
      {/* <Testimonials /> */}
      <ContactBanner />
    </main>
  );
}
