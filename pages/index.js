import Herosection from "../components/Herosection";
import Header from "../components/Header";


export default function Home({ products }) {
  return (
    <>
      <div class="overflow-x-hidden">
        <Header />
        <Herosection />
      </div>
    </>
  );
}


