import CardSlider from "../components/card_slider";
import Collections from "../components/collections";
import Hero from "../components/hero";
import ImageSlider from "../components/image_slider";
import Sponsor from "../components/sponsor";

export default function Home() {
  return (
    <>
      <Hero />
      <CardSlider />
      <Sponsor />
      <Collections />
      <ImageSlider />
    </>
  );
}
