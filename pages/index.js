import Herosection from "../components/HeroSection";
import Header from "../components/Header";


export default function Home({ products }) {
  return (
    <>
      <div class="overflow-x-hidden">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}


